import React, { useEffect } from 'react'
import { fechAllUsers } from '../store/slices/users'
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom";

export const UserList = ({user}) => {

   
  
    

    const dispatch = useDispatch();

    const { list: users } = useSelector(state => state.users)

    



    useEffect(() => {
        dispatch(fechAllUsers())

    }, [dispatch])

  


    return (
        <div className='container mt-4 '>
            <div className='row'>
                {users.map((user, index) => (
                    <div key={index} className='col-md-3 mb-4'>
                        <div className='card'>
                            <img src={user.avatar} alt='avatar' />
                            <div className='card-body'>
                                <h5 className='card-title'>{`${user.first_name} ${user.last_name}`} </h5>
                                <p className='card-text'>{user.email}</p>
                                <div className="card-footer text-center">
                                    <Link  to={`/info/${user.id}`} className="btn btn-primary my-link">Info</Link>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default UserList