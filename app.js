import api from './config/api';



const App = () => {
    async () => {
        const { data: data } = await api.post(`/pacientes`);
    }

}

export default App;