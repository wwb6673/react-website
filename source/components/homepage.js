import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class HomePage extends Component {
    render() {
        return(
        <div style ={{width: '100%', margin: 'auto'}}>
            <Grid className="home-grid">
                <Cell col={12}>
                    <img
                        src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/13096224_10209233920987802_8834550575300241922_n.jpg?_nc_cat=111&_nc_ht=scontent-ort2-1.xx&oh=6e85e5f826ab2f38e2034012b80d00e1&oe=5D19D347"
                        alt="William Briggs"
                        className="profile-img"
                    />
                    <div className="banner-text">
                        <h1 >Truman State University Student</h1>
                    </div>
                </Cell>
            </Grid>
        </div>
        )
    }
}

export default HomePage;