import axios from './api'


const  ArticlesServise = {
    async getArticles() {
        const {data} = await axios.get('/articles')
        return data
    },
}


export default ArticlesServise