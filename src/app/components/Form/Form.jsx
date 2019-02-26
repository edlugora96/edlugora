/* jshint unused:false */
import React from 'react';
import { withFormik, Field, ErrorMessage, Form as FormFormik } from 'formik';
import { Form as FromBoots, Button, Alert  } from 'react-bootstrap';
import fomrTemplate from './formTemplate';
import './form.css';
import formTemplate from './formTemplate';

const errorAlet = (props)=>{
  console.log(props, 'hey');
  return pug`
    Alert(variant="danger")= props.children
  `;
};

const Form = (props) =>{
  return pug`
    FormFormik.contact-to-me
      h3 Contactame
      each val, index in fomrTemplate['contactToMe']
        FromBoots.Group(controlId=val.id key="group"+index)
          if(val.type!=="submit")
            FromBoots.Label(key=index)= val.title

          if(val.type==="submit")
            Button(variant=val.variant type=val.type key="submit"+index)= val.title

          else if(val.type==="textarea")
            Field.form-control(component=val.type id=val.id name=val.name type=val.type placeholder=val.placeholder)
            ErrorMessage(name=val.name component=errorAlet)

          else
            Field.form-control(id=val.id name=val.name type=val.type placeholder=val.placeholder)
            ErrorMessage(name=val.name component=errorAlet)

          if(val.anotherMessage)
            FromBoots.Text.text-muted(key="anotherText"+index)= val.anotherMessage
  `;

};
export default withFormik({
  mapPropsToValues(props) {
    return formTemplate['contactToMeNames'](props);
  },
  validate(values) {
    const errors = {};

    if (!values.name) {
      errors.name = 'Name is required';
    } else if (values.name.length < 8) {
      errors.name = 'Name must be at least 8 characters';
    }
    if (Object.keys(errors).length) {
      return errors;
    }
  },

  handleSubmit(values, formikBag) {
    formikBag.setSubmitting(false);
    console.log(values);
  },
})(Form);

/*

<FromBoots className="contact-to-me">
  <h3>Contactame</h3>
  <FromBoots.Group controlId="formBasicName">
    <FromBoots.Label>Nombres</FromBoots.Label>
    <FromBoots.Control type="text" placeholder="Ingrese su nombre" />
  </FromBoots.Group>
  <FromBoots.Group controlId="formBasicLastName">
    <FromBoots.Label>Apellidos</FromBoots.Label>
    <FromBoots.Control type="text" placeholder="Ingrese su apellido" />
  </FromBoots.Group>
  <FromBoots.Group controlId="formBasicEmail">
    <FromBoots.Label>Email</FromBoots.Label>
    <FromBoots.Control type="email" placeholder="Ingrese su dirección de email" />
  </FromBoots.Group>
    <FromBoots.Text className="text-muted">
      Nunca compartiremos tu información personal con nadie más.
    </FromBoots.Text>

  <FromBoots.Group controlId="exampleFromBoots.ControlTextarea1">
    <FromBoots.Label>Mensaje</FromBoots.Label>
    <FromBoots.Control as="textarea" rows="3" />
  </FromBoots.Group>
  <Button variant="primary" type="submit">
    Enviar
  </Button>
</FromBoots>

*/