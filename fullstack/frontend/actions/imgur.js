import { API_IMGUR } from '../config';

export const imageupload = (img) => {
    let formData = new FormData();
    formData.append('image', img);
    return fetch('https://api.imgur.com/3/image/', {
        method: "POST",
        headers: {
            'Authorization': `Client-ID ${API_IMGUR}` 
        },
        body: formData
    })
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
};

// IMAGE UPLOAD CODE

// handleImage(event) {
//     this.setState({ uploading: true })
//     var fileInput = false
//     if (!event.target.files[0] || event.target.files[0].size > 19922944) {
//         this.setState({ imageError: true, uploading: false })
//     }
//     if (event.target.files[0]) {
//         fileInput = true
//     }
//     if (fileInput) {
//         var img = event.target.files[0]
//         imageupload(img).then(res => {
//             let imgArray = this.state.image
//             imgArray.push(res.data.id)
//             this.setState({ image: imgArray, imageError: false, uploading: false })
//             this.postData.set('image', imgArray)
//         }
//         )
//     }
// };

// deleteImage = (e, i) => {
//     e.preventDefault();
//     let imgList = this.state.image
//     imgList.splice(i, 1)
//     this.setState({image: imgList})
//     this.postData.set('image', imgList)
// };

{/* <input type="file" accept="image/*" onChange={this.handleImage} id="image-input" className={imageError ? "form-control form-control-sm is-invalid" : "form-control form-control-sm is-valid"} />       */}