import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

class Advanture extends Component {
    
    constructor(props) {
        super(props)
  
        this.state = {
          anime: [],
          storeadv: [],
        }
      }
  
     componentDidMount() {
        axios.get('https://api.jikan.moe/v3/genre/anime/2/1')
        .then(response => {
          const storeadv = response.data.anime;
          console.log(storeadv);
          this.setState({ storeadv });
        })
        
      }

    render() {
        return (
        <div>
           
                 {this.state.storeadv.map(listadv => 
                <a style={{textDecoration: 'none', color: 'black'}}href={listadv.url}>
                <div style={{height:300, width:250, borderStyle: 'solid', alignContent:'center', textAlign: 'center'}}> 
                    <div style={{minHeight:50, display: 'flex', backgroundColor: 'red'}}>
                    <h3 style={{margin: 'auto', textAlign: 'center', textDecoration: 'none'}}>{listadv.title}</h3> 
                    </div>
                    <br/> 
                    <img style={{height: 220, width:170, paddingBottom:10}}src={listadv.image_url} alt={listadv.title}/>  
                </div>
                </a> )}
          
      </div>
        )
    }
}

export default Advanture;