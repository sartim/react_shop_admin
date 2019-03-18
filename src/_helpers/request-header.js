export function requestHeader(authorization, content_type={}) {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.access_token) {
        if ('application_json' in content_type)
            if (authorization && content_type.application_json)
                return { 'Authorization': 'Bearer ' + user.access_token, 'Content-Type': 'application/json' };
        if ('multipart_form_data' in content_type)
            if (authorization && content_type.multipart_form_data)
                return { 'Authorization': 'Bearer ' + user.access_token, 'Content-Type': 'multipart/form-data' };
        if (authorization)
            return { 'Authorization': 'Bearer ' + user.access_token };
        return {};
    } else {
        return {};
    }
}
