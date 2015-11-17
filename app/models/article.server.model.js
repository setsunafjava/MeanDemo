/**
 * Created by Tommy_Phan on 11/11/2015.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    created: {
        type : Date,
        default : Date.now
    },
    title : {
        type : String,
        default : '',
        trim : true,
        required : 'Title cannot be blank'
    },
    content : {
        type : String,
        default: '',
        trim : true
    },
    creator:{
        type  :Schema.ObjectId,
        ref : 'User'
    }

});
mongoose.model('Article', ArticleSchema);