import './App.css'
import Header from './Header'
import Footer from './Footer'
import InputField from './InputFields'
import Tasks from './Tasks'

function App() {
  return (
    <div className='grid h-screen place-content-center bg-gradient-to-r from-sky-500 to-indigo-500'>
      <div className='bg-slate-50 drop-shadow-2xl rounded p-3'>
        <Header />
        <InputField/>
        <Tasks />
        <Footer/>
      </div>
    </div>
  )
}

export default App


//const [serv,setServ] = useState("")
  //AXIOS HTTP request
  // async function Server(){
  //   await axios.get('http://localhost:5000/api/v1/tasks')
  // .then(function (response) {
  //   setServ(`${response.data.success} means ${response.status}`)
  // })}