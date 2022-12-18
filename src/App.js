import './App.css';
import { useState, useEffect } from 'react';
import logo from "./assets/logo.png"
import search from "./assets/search.svg"
import cities from "./data/stays.json"
import star from "./assets/star.svg"
import { Content, SearchImage, StyledInput, StyledSection , Styleddiv, StyledInputLocation, StyledInputGuests, Container} from "./styles"


function App() {

  const setCity = new Set();

  const [city, setCities] = useState(cities);
  const [stays, setStays] = useState(cities)
  const [selectValue, setSelectValue] = useState("Helsinki");//hook para a cidade selecionada 
  const [amountsGuests, setAmountsGuests] = useState(1);//Hook para a quantidade de hospedes 


  const searchHouse = (e) =>{ //Função para quando o usuário clicar no botão de pesquisa 

    e.preventDefault();

    if(housesFilter.length === 0){
        alert("There's no stays")
    }else{

      setStays(housesFilter)//modifica as hospedagens de acordo com os inputs 
    }
   

  }


  const housesFilter = cities.filter((house) => house.city === selectValue && house.maxGuests >= amountsGuests);//Filtro dos inputs


  const citiesFilter = cities.filter((city) => { //Removendo propridades duplicadas do objeto

    const duplicatedCities = setCity.has(city.city);

    setCity.add(city.city);

    return !duplicatedCities;
  });


  useEffect(() => {
    
    setCities(citiesFilter);//colocando as propridades com valor unico aqui

  }, [])
  
  
  return (
    <section>

      <Content>
       
       <Styleddiv>

         <img src={logo} alt="logo"/>   

         <StyledSection>

             <StyledInputLocation location borda>

                 <select value={selectValue} onChange={e => setSelectValue(e.target.value)}>
                   <option disabled selected >Add location</option>

                   {city.map(((element, i) =>{
                     return(
                       <option key={i}>{element.city}</option>
                     )
                   }))}
                 </select>
               
             </StyledInputLocation>
           
             <StyledInputGuests width>
                 <StyledInput onChange={e => setAmountsGuests(e.target.value)} type="number" placeholder="Add guests" max="10" min="1"/>
             </StyledInputGuests>
             
               <button type="submit" onClick={searchHouse}>
                 <SearchImage src={search}/>
               </button>
         </StyledSection>       

       </Styleddiv>
     
   
       <div>
         <h3 style={{fontWeight : "800", fontFamily : "Montserrat", color : "#333333", fontSize : "24px"}}>Stays in Finland</h3>
       </div>
     </Content>


     <Container>
        {stays.map((stay, i)=>{
            return (
            <main key={i}>
                <div>
                    <img src={stay.photo} alt="houses"/>
                </div>

                <section>
                    <a href="https:www.google.com">{stay.superHost ? "SUPER HOST" : "NO SUPER HOST"}</a>
                    <span>{stay.type}</span>
                    <span>{stay.beds ? `${stay.beds} beds`: `No beds`}</span>
                    <div>
                      <img src={star} alt="estrela"/>
                      <p>{stay.rating}</p>
                    </div>
                
                </section>

                <dt>{stay.title}</dt>
                
            </main>)

        })}
       
    </Container>


  </section>
  );
}

export default App;
