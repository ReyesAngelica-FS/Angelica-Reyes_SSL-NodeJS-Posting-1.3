function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { id: userId, name: 'User ' + userId };
            resolve({ status: 200, data: user });
        }, 1000);
    });
}

function fetchUserPosts(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Post 1', 'Post 2', 'Post 3'];
            resolve({ status: 200, data: posts });
        }, 1000);
    });
}

function fetchPostComments(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const comments = ['Comment 1', 'Comment 2'];
            resolve({ status: 200, data: comments });
        }, 1000);
    });
}

// Refactored example:
fetchUserData(1)
    .then(response => {
        console.log('User Response:', response);
        return fetchUserPosts(response.data.id);
    })
    .then(response => {
        console.log('Posts Response:', response);
        return fetchPostComments(response.data[0]); // Use the first post ID for fetching comments
    })
    .then(response => {
        console.log('Comments Response:', response);
    })
    .catch(error => {
        console.error('Error:', error);
    });