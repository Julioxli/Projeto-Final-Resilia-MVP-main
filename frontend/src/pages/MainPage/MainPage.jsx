import React,{useState,useEffect,useContext} from "react"
import { Link} from 'react-router-dom'
import "./MainPageStyle.css";
import NavBar from "../../components/NavBar"
import Search from "../../components/Search"
import Repositories from "../../components/Repositories"
import { getRepositories,CreateRepository,destroyRepository } from "../../services/api"
import { AuthContext } from "../../contexts/auth"


// const user?.id = '641b117faa456b11b5a1bafb'

const MainPage = () => {
  const {user,logout,deleteAcc} = useContext(AuthContext)
  const [repositories,setRepositories] = useState([])
  const [loading,setLoading] = useState(false)
  const [loadingError,setLoadingError] =  useState(false)

  const loadData = async (query = '') => {
    try {
      const response = await getRepositories(user?.id,query)
      setRepositories(response.data)
      setLoading(false)
    } catch (err) {
      console.error(err)
      setLoadingError(true)
    }
  }
  useEffect(()=>{
    (async () => await loadData())()
  },[])
  const handleSearch = async (query)=>{
    loadData(query)
   } 

  const handleLogout = () => {
    console.log("logout")
    logout()

  }
  const handleNewRepo = async (url)=>{
    console.log('new Repo Created',url)
    try {
      await CreateRepository(user?.id,url)
      await loadData()
    } catch (err) {
      console.error(err)
      setLoadingError(true)
    }
  }
  const handleDeleteRepo = async(repository)=> {
    console.log('deleteRepo')
    await destroyRepository( user?.id,repository._id)
    await loadData()
  }
  const handleDeleteAcc = async()=> {
  console.log('handleDeleteAcc')
  deleteAcc()
  }
  if(loadingError){
    <div className="loading">
      Erro ao carregar os dados de repositório.<Link to='/'>Voltar</Link>
    </div>
  }
  if(loading){
    return(
      <div className="loading">
        Carregando...
      </div>
    )
  }
  return (
    <div className="main">
      <NavBar onLogout={handleLogout}/>
      <Search onSearch={handleSearch} />
      <Repositories 
      repositories={repositories}
      onDeleteRepo={handleDeleteRepo}  
      onNewRepo={handleNewRepo}
      onDeleteAcc={handleDeleteAcc}
      />
    </div>
  );
};

export default MainPage;
