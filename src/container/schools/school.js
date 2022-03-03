import { MdEdit, MdAdd, MdOutlineSearch, MdDelete, MdThumbUpOffAlt} from 'react-icons/md'
// import { ThumbUp } from '@mui/icons-material'
import { Dialog, Grid, } from '@mui/material'
import React,{useEffect,useState} from 'react'
import apiService from '../../api/apiService'
import CreateSchool from './createSchool'


function School(props) {

  const [schools,setSchools] = useState();
  const [open, setOpen] = useState(false);
  const [editData,setEditData] = useState({});

  const GetAllSchools=()=>{
    apiService.GetAllSchoolAdmin() 
    .then((res)=>{
      console.log(res.data)
      setSchools(res.data.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
     useEffect(() => {
     GetAllSchools()
     }, [])
     

     const handleClickOpen = () => {
       setOpen(true);
     };
   
     const handleClose = () => {
       setOpen(false);
       GetAllSchools()
       setEditData({})
     };

     const onEdit= (school) => {
             console.log(school,"onedit")
             setEditData(school)
             setOpen(true);
     } 

     const onDelete= (school) => {
        console.log(school,"ondelete")
       apiService.DeleteSchoolAdmin(school._id).then(res=>{
           GetAllSchools()
       }).catch((error)=>{
           console.log(error)
       })
} 


    return (
      
        <div className="admin">
          
            {/* heading and search box */}
            <div >
                <Grid container spacing={0}  >
                    <Grid item xs={12} md={6} > <h2> Schools </h2> </Grid>

                    <Grid item xs={12} md={6}  >
                        <div className="search">
                            <div className="search-box">
                                <input className="search-input" placeholder="Search..." />
                                <MdOutlineSearch style={
                                    {width: "27px",height: "27px", color: "#CACACA" }
                                } />
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            {/* list */}
            { schools?.length>0? schools.map((obj)=>  <div key={obj._id} className="admin-card">
                <Grid container spacing={2}>
                    <Grid item xs={6} md={1}>

                        <div className="card-label"> Code</div>
                        <div className="card-text"> {obj.code}</div>
                    </Grid>
                    <Grid item xs={6} md={2}>

                        <div className="card-label"> School Name</div>
                        <div className="card-text"> {obj.schoolName}</div>
                    </Grid>
                    <Grid item xs={6} md={3}>

                        <div className="card-label"> School Address</div>
                        <div className="card-text"> {obj.schoolAddress}</div>
                    </Grid>
                    <Grid item xs={6} md={2}>

                        <div className="card-label"> Contact Number</div>
                        <div className="card-text"> {obj.phoneNumber}</div>
                    </Grid>

                    <Grid item xs={6} md={3}>

                        <div className="card-label"> Email</div>
                        <div className="card-text"> {obj.email}	</div>
                    </Grid>

                    <Grid item xs={6} md={1}>

                        <div className="action-box">
                            <MdEdit style={{ width: "100%",height: "27px", color:"#0A98D3"}} onClick={()=>onEdit(obj)} />
                            <MdDelete style={{ width: "100%",height: "27px", color: "#FF0000"}} onClick={()=>onDelete(obj)}/>
                            <MdThumbUpOffAlt style={{ width: "100%",height: "27px", color:"#4BEB00" }} />
                        </div>
                    </Grid>

                </Grid>
            </div> ) : <div> No Schools Found </div> }

             
             <button onClick={handleClickOpen} className="round-btn"> <MdAdd style={{ width: "100%",height: "27px" }}/> </button>     
             <Dialog open={open} onClose={handleClose}> <CreateSchool onSuccess={handleClose} edit={editData} /> </Dialog>
        </div>
    )
}

export default School;



