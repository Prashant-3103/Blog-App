import Post from "../model/Post"
import PostCategories from "../model/PostCategories"
const createPostCategory= async (req,res,next)=>{
    try {
const {title} = req.body

const postCategory = await PostCategories.findOne({title})
if(postCategory)
{
    const error = new Error("Category is already created")
    return next(error)
}

const newPostCategories = new PostCategories({
    title: title
})

const savedPostCategory = await newPostCategories.save();
return res.status(201).json(savedPostCategory)

    } catch (error) {
next(error)
    }
}

const getAllPostCategories= async (req,res,next)=>{
    try {

const postCategories = await PostCategories.find({})

return res.json(postCategories)

    } catch (error) {
next(error)
    }
}

const updatePostCategory= async (req,res,next)=>{
    try {
const {title} = req.body;

const postCategory = await PostCategories.findByIdAndUpdate(req.params.postCategoryId,{

title: title
},{
  new: true
}
)
if(!postCategory)
{
const error = new Error("Category not found")
return next(error)
}

return res.json(postCategory)

    } catch (error) {
next(error)
    }
}

const deletePostCategory = async(req,res,next)=>{
try {
const categoryId = req.params.postCategoryId;
await Post.updateMany({
    categories: {$in: [categoryId] } }, {$pull: {categories: categoryId}}
    )

await PostCategories.deleteOne({_id: categoryId})
res.send({
    message: "Post category is successfully deleted"
})

} catch (error) {
next(error)
}
}

export {
    createPostCategory, getAllPostCategories, updatePostCategory, deletePostCategory }
