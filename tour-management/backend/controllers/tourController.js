
import Tour from '../models/Tour.js'

//create new tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body)

    try{
        const savedTour = await newTour.save()

        res.status(200).json({success:true, message:'Successfull created',
        data:savedTour})
    }
    catch (err) {
        console.log(err)
        res.status(500).json({success:false, message:'Failed to create. Try again '}) 
    }
}