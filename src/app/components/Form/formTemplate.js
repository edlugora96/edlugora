export default {
  contactToMe: [
    {
      type:'text',
      name:'name',
      title:'Nombre(s)',
      placeholder:'Ingrese su(s) nombre',
      id:'formBasicName'
    },
    {
      type:'text',
      name:'lastName',
      title: 'Apellido(s)',
      placeholder:'Ingrese su(s) apellido(s)',
      id:'formBasicLastName'
    },
    {
      type:'email',
      name:'email',
      title: 'Email',
      placeholder: 'Ingrese su email',
      id:'email',
      anotherMessage:'Nunca compartiremos tu información personal con nadie más.'
    },
    {
      type:'textarea',
      name:'message',
      title:'Mensaje',
      rows:'3',
      id:'exampleForm.ControlTextarea1'
    },
    {
      title:'Enviar',
      type:'submit',
      variant:'primary',
      id:'submitContactToMe'
    }
  ],
  contactToMeNames: (props) => ({
    name: props.name?props.name:'',
    lastName: props.lastName?props.lastName:'',
    email: props.email?props.email:'',
    message: props.message?props.message:''
  }),
  loggin: {
    name: {
      type: 'text',
      title: 'Nombre(s)',
      placeholder: 'Ingrese su(s) nombre',
      id: 'formBasicName'
    },
    lastName: {
      type: 'text',
      title: 'Apellido',
      placeholder: 'Ingrese su(s) apellido(s)',
      id: 'formBasicLastName'
    },
    email: {
      type: 'email',
      title: 'Email',
      placeholder: 'Ingrese su email',
      id: 'email'
    },
    message: {
      type: 'textarea',
      title: 'Mesaje',
      row: '3',
      id: 'exampleForm.ControlTextarea1'
    }
  }
};