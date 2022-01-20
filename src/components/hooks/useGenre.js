const useGenre = (selectGenr) => {
    if(selectGenr.length < 1) return ''
    const itemID = selectGenr.map((item)=> item.id)
        return itemID.join(',')
}

export default useGenre;