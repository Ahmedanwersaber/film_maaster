import {ALLMOVIE} from '../type/MovieType';

const initial={movies:[],pagecount:0}
export const Moviereducer=(state={initial},action)=>{

    switch (action.type) {
        case ALLMOVIE:
            
        return {movies:action.data,pagecount:action.pages}
    
        default:
            return state;
    }

}