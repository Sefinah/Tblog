import { deleteGenreService, genreService, getAllGenreService, updateGenreService } from "../services/genre.service.js"


export const createGenre = async (req, res) =>{
    const {name} = req.body
    try {
        if(!name){
            return res.status(400).json({
                message: "Name is required"
            })
            
        }
        const result = await genreService(name)
            return res.status(201).json({
                message: "genre created successfully",
                data: result
            })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong" 
        })
    }
}

export const getAllGenre = async (req, res) =>{
    try {
        const result = await getAllGenreService()
        return res.status(201).json({
            message: "Genre gotten successfully",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}

export const deleteGenre = async (req,res) =>{
    try {
        const id = req.params.id
        const result = await deleteGenreService(id)
        return res.status(201).json({
            message: "Genre deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Something went wrong"
        })
    }
}

export const updateGenre = async (req,res) => {
    try {
        const {name} = req.body
        const id = req.params.id
        const result = await updateGenreService(id,name)
        return res.status(201).json({
            message: "genre Updated successfully",
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message || "something went wrong"
        })
    }
}