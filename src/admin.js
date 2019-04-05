import React, { Component } from 'react';

const Admin = () => {

    return (

        <div>
            <form>


                <label>
                    <h1>Rajouter de la donnée :</h1>
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />


            </form>
        </div>

    );
}

export default Admin;