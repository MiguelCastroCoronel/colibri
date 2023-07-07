def chequearToken() {
    token = request.headers.get('Authorization')
    if not token:
        return { 'message': 'Token no encontrado' }, 401
    if token.startswith('Bearer '):
        token = token.split(' ')[1]

    usuario = verificar_token(token)
    if not usuario:
        return { 'message': 'Token inválido o expirado' }, 401
}
    
    para validas el token,

    dentro de Put por ejemplo:

@app.route('/noticias/<int:id>', methods = ['PUT'])
    def actualizar_noticia(id):
chequearToken()
    
    si esta bien continuar aca ...
wqq - xkhw - pfh

    def verificar_token(token):
try:
payload = jwt.decode(token, current_app.config['SECRET_KEY'], algorithms = ['HS256'])
return payload['usuario']
    except jwt.ExpiredSignatureError:
return None


        // En vue.js:

        async iniciarSesion() {

    try {
        const response = await axios.post(url_api + '/api/login', {
            usuario: this.usuario,
            password: this.password
        });


        if (response.data && response.data.token) {
            const token = response.data.token;
            localStorage.setItem('token', token);


            eliminarComentario(id) {

                const token = localStorage.getItem('token');
                const headers = {
                    Authorization: `Bearer ${token}`
                };

                axios.delete(url_api + '/comentarios/' + id, { headers })
                    .then(response => {
                        console.log("validado el jwt")
                    })
                    .catch(error => {
                        console.log("error")
                    });
            }














            wqq - xkhw - pfh

