import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from '../services/axiosConfig';

const Profile = () => {
  const { user, setUser } = useAuth();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [message, setMessage] = useState({ type: '', content: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        username: user.username,
        email: user.email
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', content: '' });

    try {
      if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
        setMessage({ type: 'error', content: 'Les mots de passe ne correspondent pas' });
        return;
      }

      const response = await axios.put('/users/profile', {
        username: formData.username,
        email: formData.email,
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword
      });

      setUser(response.data);
      setMessage({ type: 'success', content: 'Profil mis à jour avec succès' });
      setIsEditing(false);
      setFormData(prev => ({
        ...prev,
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      }));
    } catch (err) {
      setMessage({ 
        type: 'error', 
        content: err.response?.data?.message || 'Une erreur est survenue'
      });
    }
  };

  return (
    <section className="section-padding">
      <div className="auto-container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="section_heading text-center mb_20">
              <span className="section_heading_title_small">Profil</span>
              <h2 className="section_heading_title_big">Vos Informations</h2>
            </div>

            {message.content && (
              <div className={`alert alert-${message.type === 'error' ? 'danger' : 'success'}`}>
                {message.content}
              </div>
            )}

            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Nom d'utilisateur</label>
                      <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                        required
                      />
                    </div>
                  </div>

                  {isEditing && (
                    <>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Mot de passe actuel</label>
                          <input
                            type="password"
                            name="currentPassword"
                            value={formData.currentPassword}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Nouveau mot de passe</label>
                          <input
                            type="password"
                            name="newPassword"
                            value={formData.newPassword}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Confirmer le mot de passe</label>
                          <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="col-md-12 text-center">
                    {!isEditing ? (
                      <button 
                        type="button" 
                        className="btn-1"
                        onClick={() => setIsEditing(true)}
                      >
                        Modifier <span></span>
                      </button>
                    ) : (
                      <div className="d-flex justify-content-center gap-3">
                        <button type="submit" className="btn-1">
                          Sauvegarder <span></span>
                        </button>
                        <button 
                          type="button" 
                          className="btn-1 btn-alt"
                          onClick={() => {
                            setIsEditing(false);
                            setFormData(prev => ({
                              ...prev,
                              username: user.username,
                              email: user.email,
                              currentPassword: '',
                              newPassword: '',
                              confirmPassword: ''
                            }));
                          }}
                        >
                          Annuler <span></span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile; 