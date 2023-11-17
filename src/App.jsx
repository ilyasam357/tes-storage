

import React, { useContext } from 'react';

// Buat konteks pertama
const UserContext = React.createContext();
// Komponen anak yang mengakses nilai konteks
function Profile() {
  const user = useContext(UserContext);

  return (
    <div className="bg-slate-400 w-1/4">
      <h2 >Profil Pengguna</h2>
      <p>Nama: {user.name}</p>
      <p>Usia: {user.age}</p>
    </div>
  );
}


// Komponen induk yang menyediakan nilai konteks
function App() {
  const user = { name: 'afadf Doe', age: 30 };

  return (
    <UserContext.Provider value={user}>
        <Profile />
    </UserContext.Provider>
  );
}


export default App;