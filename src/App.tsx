import React, {useEffect, useState} from 'react';
import About from './Components/About';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {IMain} from "./Models/Header";

import './App.css';

function App() {
    const [mainInfo, setMainInfo] = useState<IMain>({
        name: "",
        email: "string",
        city: "string",
        description: "",
        occupation: "",
        social: [],
        address: {district: "", city: "", zip: 0},
        contact_email_message: "",
        contact_message: ""
        }
    )

    useEffect(() => {
        fetch(process.env.PUBLIC_URL + '/data.json',
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(r => {
                return r.json()
            })
            .then((jsonResponse) => {
                const a = jsonResponse.main
                setMainInfo(a);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


  return (
      <div className="App">
          <Header {...mainInfo}/>
          <About {...mainInfo}/>
          <Footer {...mainInfo}/>
      </div>
  );
}

export default App;
