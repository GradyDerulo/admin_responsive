import "./add.scss";

const Add = (props)=> {


    const handleSubmit = (e) => {
        e.preventDefault();
    
        //add new item
        // mutation.mutate();
        props.setOpen(false)
      };

    return (
        <div className="add"> {/* Overlay */}
        <div className="modal">
          <span className="close" onClick={() => props.setOpen(false)}>
            X
          </span>
          <h1>Add new {props.slug}</h1>
          <form onSubmit={handleSubmit}>
          
                <div className="item">
                  <label>FirstName</label>
                  <input type="text" placeholder="avatar" />
                </div>
                <div className="item">
                  <label>LastName</label>
                  <input type="text" placeholder="avatar" />
                </div>
                <div className="item">
                  <label>Email</label>
                  <input type="text" placeholder="avatar" />
                </div>
                <div className="item">
                  <label>Telephone</label>
                  <input type="text" placeholder="avatar" />
                </div>
                <div className="item">
                  <label>Avatar</label>
                  <input type="text"placeholder="avatar" />
                </div>

            <button>Send</button>
          </form>
        </div>
      </div>
    )
  }
  
  export default Add




 /*
     ceci est dynamique
 <form onSubmit={handleSubmit}>
            {props.columns
              .filter((item) => item.field !== "id" && item.field !== "img")
              .map((column) => (
                <div className="item">
                  <label>{column.headerName}</label>
                  <input type={column.type} placeholder={column.field} />
                </div>
              ))}
            <button>Send</button>
          </form> 
         
  =========================================================================================================
   */

import { createContext, useContext, useEffect, useState } from "react";

const MyContext = createContext();

export const ContextProvider = ({ children }) => {
  const [userC, setUserC] = useState(null);
  const [myAgents, setMyAgents] = useState([]);
  const [mySolicitants, setMySolicitants] = useState([]); // Nouvel état pour les sollicitants
  const [myActivities, setMyActivities] = useState([]); // Nouvel état pour les activités

  // --- Fonctions utilitaires ---

  const generateId = () => {
    return "id-" + Date.now().toString(36) + "-" + Math.random().toString(36).substr(2, 5);
  };

  const formatDate = () => {
    const now = new Date();
    return `${now.getDate().toString().padStart(2, '0')}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getFullYear()} ${now.getHours()}h ${now.getMinutes()}m`;
  };

  const generateId_3 = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `Agent-${timestamp}-${random}`;
  };

  const generateId_Activity = () => { // Nouvelle fonction pour générer l'ID d'activité
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    return `ACT-${timestamp}-${random}`;
  };

  const formatDate_2 = () => {
    return new Date();
  };

  // --- Effets de chargement initial ---

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    setMyAgents(storedUsers ? JSON.parse(storedUsers) : []);

    const storedSolicitants = localStorage.getItem('solicitants'); // Charger les sollicitants
    setMySolicitants(storedSolicitants ? JSON.parse(storedSolicitants) : []);

    const storedActivities = localStorage.getItem('activities'); // Charger les activités
    setMyActivities(storedActivities ? JSON.parse(storedActivities) : []);

  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem('authUser');
    if (storedUser) {
      setUserC(JSON.parse(storedUser));
    }
  }, []);

  // --- Fonctions d'authentification et de gestion des utilisateurs/agents ---

  const register = (newUser) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const exists = users.find(u => u.email === newUser.email);
    if (exists) return { success: false, message: 'Utilisateur déjà existant' };

    const userWithId = {
      ...newUser,
      _id: generateId(),
      date: formatDate_2(),
      isAdmin: newUser.isAdmin || false,
      fonction: newUser.fonction || '',
    };

    const updatedUsers = [...users, userWithId];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setMyAgents(updatedUsers);
    setUserC(userWithId);
    localStorage.setItem("authUser", JSON.stringify(userWithId));
    return { success: true };
  };

  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const found = users.find(u => u.email === email && u.password === password);
    if (found) {
      setUserC(found);
      localStorage.setItem('authUser', JSON.stringify(found));
      return { success: true };
    }
    return { success: false, message: 'Identifiants invalides' };
  };

  const logout = () => {
    setUserC(null);
    localStorage.removeItem('authUser');
  };

  const updateUserProfile = (updatedFields) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(u => {
      if (userC && u._id === userC._id) {
        return { ...u, ...updatedFields };
      }
      return u;
    });

    const updatedUser = { ...userC, ...updatedFields };
    setUserC(updatedUser);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('authUser', JSON.stringify(updatedUser));
    setMyAgents(updatedUsers);
  };

  const addnewAgent = (form) => {
    const newAgent = {
      _id: generateId_3(),
      date: formatDate_2(),
      adresse: '',
      image: '',
      name: '',
      phone: '',
      email: '',
      isAdmin: false,
      fonction: '',
      password: '',
      ...form,
    };

    const updatedAgents = [...myAgents, newAgent];
    setMyAgents(updatedAgents);
    localStorage.setItem('users', JSON.stringify(updatedAgents));
    return newAgent;
  };






  // --- Nouvelle fonction pour ajouter une activité ---
  const addActivity = (activityData) => {
    // Valider si l'agent connecté existe
    if (!userC) {
      return { success: false, message: "Aucun agent connecté pour enregistrer l'activité." };
    }

    // Trouver le sollicitant par son ID pour obtenir son nom complet
    const solicitant = mySolicitants.find(sol => sol._id === activityData.solicitantId);
    if (!solicitant) {
      return { success: false, message: "Sollicitant introuvable." };
    }

    const newActivity = {
      _idActivity: generateId_Activity(),
      date_creation: formatDate_2(), 
      title: activityData.title,
      description: activityData.description,
      startDate: activityData.startDate,
      endDate: activityData.endDate,
      agentName: userC.name, // Nom de l'agent connecté
      agentId: userC._id, // ID de l'agent connecté
      solicitantName: solicitant.name, // Nom du sollicitant sélectionné
      solicitantId: solicitant._id, // ID du sollicitant sélectionné
      status: activityData.status || "prévu", // Statut par défaut "prévu"
    };

    const updatedActivities = [...myActivities, newActivity];
    setMyActivities(updatedActivities);
    localStorage.setItem('activities', JSON.stringify(updatedActivities));

    return { success: true, activity: newActivity };
  };

  return (
    <MyContext.Provider value={
      {
        userC, register, login, logout, updateUserProfile,
        addnewAgent, myAgents,
        mySolicitants, // Exposer les sollicitants pour la recherche
        addActivity, myActivities // Exposer les activités
      }
    }>
      {children}
    </MyContext.Provider>
  );
};

// Hook pour accéder facilement au contexte
export const useMyContext = () => {
  return useContext(MyContext);
};


//__________________________________________________________________________







