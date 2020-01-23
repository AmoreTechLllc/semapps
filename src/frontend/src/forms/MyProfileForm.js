import React from 'react';
import { Form, Field } from 'react-final-form';
import { useDispatch } from 'react-redux';
import { CONTAINER_URI, MIDDLEWARE_URL } from '../config';
import useQuery from '../api/useQuery';
import { editResource } from '../api/actions';
import useAuth from '../auth/useAuth';
import Page from '../Page';

const MyProfileForm = ({ navigate }) => {
  useAuth({ force: true });
  const { data: user } = useQuery(`${MIDDLEWARE_URL}me`);
  const dispatch = useDispatch();

  const editUser = async values => {
    // const user = {
    //   '@context': 'http://schema.org/',
    //   type: 'Person',
    //   ...values
    // };
    //
    // await fetch(userUri, {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Bearer ${localStorage.getItem('token')}`
    //   },
    //   body: JSON.stringify(user)
    // });
    //
    // await dispatch(editResource(userUri, user));
    //
    // navigate(`/users/${userId}`);
  };

  return (
    <Page>
      {user && (
        <>
          <h2>Modifier mon profil</h2>
          <Form
            onSubmit={editUser}
            initialValues={{
              name: user.name || user['foaf:name'],
              familyName: user.familyName || user['foaf:familyName'],
              email: user.email || user['foaf:email']
            }}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Prénom</label>
                  <Field name="name" component="input" className="form-control" id="name" />
                </div>
                <div className="form-group">
                  <label htmlFor="familyName">Nom de famille</label>
                  <Field name="familyName" component="input" className="form-control" id="familyName" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Adresse e-mail</label>
                  <Field name="email" component="input" className="form-control" id="email" />
                </div>
                <button type="submit" className="btn btn-warning w-100">
                  Modifier mon profil
                </button>
              </form>
            )}
          />
        </>
      )}
    </Page>
  );
};

export default MyProfileForm;
