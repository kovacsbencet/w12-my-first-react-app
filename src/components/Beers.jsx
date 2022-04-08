import Beer from './Beer.jsx'

function Beers ({list}) {
    console.log(<Beer info={list[0]} key={100}/>);
    return(
        <div className="beers">
            {list.map((item, index) => <Beer info={item} key={index}/>)}
        </div>
    )
}

export default Beers

// Object destructruing
// Írassuk ki a beernek az összes tulajdonságát

// JSX-ből lesz JavaScript majd abból HTML