// write and export your action creator function here

export const fetchCats = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_CATS'})
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
            .then(res => res.json())
            .then(resJSON => {
                dispatch({type: 'ADD_CATS', cats: resJSON.images})  //goes to action in which the acion creator calls in component
            })
    }

}
