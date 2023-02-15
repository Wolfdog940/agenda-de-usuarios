import React, { useEffect } from 'react'
import { Link ,useParams} from "react-router-dom";
import { fetchUnicUser } from '../store/slices/unicUser';
import { useDispatch, useSelector } from "react-redux"




function Info() {

  const {id} =useParams()
  console.log(id)

  const dispatch = useDispatch();
  const { list: unicUser } = useSelector(state => state.unicUser)

  useEffect(() => {
    dispatch(fetchUnicUser(id))
  }, [dispatch])


  return (
    <div className='d-flex justify-content-center w-100'>
      <div className='col-md-3 mt-5'>
        <div className='card'>
          <img src={unicUser.avatar} alt='avatar' />
          <div className='card-body'>
            <h5 className='card-title'>{`${unicUser.first_name} ${unicUser.last_name}`} </h5>
            <p className='card-text'>{unicUser.email}</p>
            <div className="card-footer text-center">
              <Link to="/" className="btn btn-primary my-link">Back</Link>
            </div>
          </div>
          
        </div>
      </div>
      </div>
  )
}

export default Info