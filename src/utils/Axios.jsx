import axios from 'axios'

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers:{
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZjM0MWQ4ODZkMWI4OTQyNzAyZGVjODNkZTZhOGRmZCIsIm5iZiI6MTcyNDQwNjk5OC43OTE3ODEsInN1YiI6IjY2Yzg1OTIzYmE0YTRjZGYwMWZiODAyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x-ddo4Nk6RMYrw1sE2Bps1LV8zFkwQasppeM9QBPbKY'
      

    }
})

export default instance