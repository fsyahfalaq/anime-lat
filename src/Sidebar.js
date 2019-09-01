import React from 'react';
import './App.css';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

class AnimeList extends React.Component {

    constructor(props) {
      super(props)

      this.state = {
        anime: [],
        store: [],
      }
    }

   componentDidMount() {
      axios.get('https://api.jikan.moe/v3/top/anime/1/airing')
      .then(response => {
        const store = response.data.top;
        console.log(store);
        this.setState({ store });
      })
      
    }

    render() {
      return (
      <div>
        <Grid container spacing={3}>
          
          {this.state.store.map(list => 
          <Grid item lg= {3} md={4} sm={6} xs={12} key={list.mal_id}>
          <a style={{textDecoration: 'none', color: 'black'}}href={list.url}>
          <div style={{height:300, width:250, borderStyle: 'solid', alignContent:'center', textAlign: 'center'}}> 
            <div style={{minHeight:50, display: 'flex', backgroundColor: 'red'}}>
              <h3 style={{margin: 'auto', textAlign: 'center', textDecoration: 'none'}}>{list.title}</h3> 
            </div>
            <br/> 
            <img style={{height: 220, width:170, paddingBottom:10}}src={list.image_url} alt={list.title}/>  
          </div>
          </a>
          </Grid> )}
          
          </Grid>
      </div>
      )
    }
}

export default AnimeList;