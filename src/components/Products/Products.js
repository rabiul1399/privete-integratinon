import React from 'react';
import useFirebase from '../../hooks/useFirebase';


const Products = () => {
    const {user} = useFirebase();
    return (
        <div>
    <h2>Knock Knock ! who Is where</h2>
    
            <p>user:{user? user.displayName : 'voooottt'}</p>
        </div>
    );
};

export default Products;