import React, { useState } from "react";

export default function RSVPForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nombre: "",
    asistencia: "",
    telefono: "",
    infoAdicional: "",
    acompañanteNombre: "",
    acompañanteAlergias: "",
    autobus: "",
    cancionFavorita: "", 
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Limpiar error al cambiar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const nextStep = () => {
    const newErrors = {};
    
    // Validar campos según el paso actual
    if (step === 1) {
      if (!formData.nombre.trim()) newErrors.nombre = 'Nombre es obligatorio';
      if (!formData.asistencia) newErrors.asistencia = 'Por favor selecciona una opción';
      if (!formData.telefono.trim()) newErrors.telefono = 'Teléfono es obligatorio';
    }
    
    if (step === 3 && !formData.autobus) {
      newErrors.autobus = 'Por favor selecciona una opción';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setStep((prev) => Math.min(prev + 1, 4));
  };
  
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const steps = ["Invitado", "Acompañante", "Autobús", "Canción"]; 

  const handleSubmit = async (e) => {
  e.preventDefault();
  setSubmitting(true);
  setSubmitError(null);
  setSubmitSuccess(false);

  const mappedData = {
    nombreCompleto: formData.nombre,
    telefono: formData.telefono,
    confirmacion: formData.asistencia,
    restriccionesAlimenticias: formData.infoAdicional,
    acompañante: formData.acompañanteNombre,
    alergiasAcompañante: formData.acompañanteAlergias,
    necesitaAutobus: formData.autobus,
    cancionFavorita: formData.cancionFavorita,
  };

  const apiBaseUrl =
    import.meta.env.MODE === "development"
      ? ""
      : import.meta.env.VITE_API_URL;

  try {
    const res = await fetch(`${apiBaseUrl}/api/invitaciones`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(mappedData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.error || "Error en el servidor");
    }

    setSubmitSuccess(true);
    setFormData({
      nombre: "",
      asistencia: "",
      telefono: "",
      infoAdicional: "",
      acompañanteNombre: "",
      acompañanteAlergias: "",
      autobus: "",
      cancionFavorita: "",
    });
    setStep(1);
  } catch (error) {
    setSubmitError(error.message || "Error de conexión. Intenta más tarde.");
  } finally {
    setSubmitting(false);
  }
};
  return (
    <section 
      className="py-16 px-4 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/img/fondo_cuentaAtras.jfif')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="max-w-xl w-full mx-auto p-6 md:p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Confirmación de asistencia
          </h2>
          <p className="text-gray-600">
            Ayúdanos a preparar nuestra boda perfecta
          </p>
        </div>

        {/* Mensajes de éxito/error */}
        {submitSuccess && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-200 text-center">
            <span className="font-medium">¡Gracias!</span> Tu confirmación se ha enviado correctamente.
          </div>
        )}
        {submitError && (
          <div className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg border border-red-200">
            {submitError}
          </div>
        )}

        {/* STEP INDICATOR - Actualizado con nuevos colores */}
        <div className="flex justify-between items-start mb-10 relative">
          <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-10 mx-8"></div>
          
          {steps.map((label, index) => {
            const current = index + 1 === step;
            const completed = index + 1 < step;
            return (
              <div key={index} className="flex flex-col items-center z-10">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold mb-2
                  ${completed ? "bg-teal-600 text-white" 
                    : current ? "bg-teal-100 text-teal-800 border-2 border-teal-600 shadow-inner" 
                    : "bg-gray-100 text-gray-500 border border-gray-300"}`}>
                  {index + 1}
                </div>
                <span className={`text-xs font-medium ${current || completed ? "text-teal-700" : "text-gray-500"}`}>
                  {label}
                </span>
              </div>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="space-y-8" noValidate>
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo*
                </label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Ej: María López"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 ${
                    errors.nombre ? 'border border-red-500' : 'border-none'
                  } focus:outline-none focus:ring-2 focus:ring-teal-300`}
                />
                {errors.nombre && <p className="text-red-500 text-sm mt-1">{errors.nombre}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ¿Vas a asistir?*
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {["sí", "no"].map((option) => (
                    <label 
                      key={option}
                      className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all ${
                        formData.asistencia === option 
                          ? 'border-teal-500 bg-teal-50 text-teal-700 font-medium' 
                          : 'border-gray-300 bg-gray-50 hover:border-teal-300'
                      }`}>
                      <input
                        type="radio"
                        name="asistencia"
                        value={option}
                        checked={formData.asistencia === option}
                        onChange={handleChange}
                        className="hidden"
                      />
                      {option === "sí" ? "Sí, asistiré" : "No, no podré"}
                    </label>
                  ))}
                </div>
                {errors.asistencia && <p className="text-red-500 text-sm mt-1">{errors.asistencia}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono*
                </label>
                <input
                  type="tel"
                  name="telefono"
                  placeholder="Ej: 612345678"
                  required
                  value={formData.telefono}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-gray-50 ${
                    errors.telefono ? 'border border-red-500' : 'border-none'
                  } focus:outline-none focus:ring-2 focus:ring-teal-300`}
                />
                {errors.telefono && <p className="text-red-500 text-sm mt-1">{errors.telefono}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Restricciones alimenticias
                </label>
                <textarea
                  name="infoAdicional"
                  placeholder="Alergias, intolerancias, dietas especiales..."
                  value={formData.infoAdicional}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border-none focus:outline-none focus:ring-2 focus:ring-teal-300"
                  rows="3"
                />
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition shadow-md hover:shadow-lg flex items-center"
                >
                  Siguiente
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-4">
                  Información del acompañante
                </h3>
                
                <div className="mb-5">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo del acompañante
                  </label>
                  <input
                    type="text"
                    name="acompañanteNombre"
                    placeholder="Ej: Pedro Fernández"
                    value={formData.acompañanteNombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-none focus:outline-none focus:ring-2 focus:ring-teal-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Alergias o restricciones del acompañante
                  </label>
                  <textarea
                    name="acompañanteAlergias"
                    placeholder="Indica cualquier alergia o restricción alimenticia"
                    value={formData.acompañanteAlergias}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-none focus:outline-none focus:ring-2 focus:ring-teal-300"
                    rows="3"
                  />
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition shadow flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition shadow-md hover:shadow-lg flex items-center"
                >
                  Siguiente
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="bg-teal-50 rounded-xl p-5 mb-6 border border-teal-100">
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  Transporte a la boda
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Ofrecemos autobús desde el centro de la ciudad para facilitar vuestro desplazamiento
                </p>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ¿Necesitas autobús?*
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["sí", "no"].map((option) => (
                      <label 
                        key={option}
                        className={`flex items-center justify-center p-4 rounded-lg border cursor-pointer transition-all bg-gray-50 ${
                          formData.autobus === option 
                            ? 'border-teal-500 bg-teal-100 text-teal-700 font-medium' 
                            : 'border-gray-300 hover:border-teal-300'
                        }`}>
                        <input
                          type="radio"
                          name="autobus"
                          value={option}
                          checked={formData.autobus === option}
                          onChange={handleChange}
                          className="hidden"
                        />
                        {option === "sí" ? "Sí, necesito" : "No, gracias"}
                      </label>
                    ))}
                  </div>
                  {errors.autobus && <p className="text-red-500 text-sm mt-2">{errors.autobus}</p>}
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition shadow flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition shadow-md hover:shadow-lg flex items-center"
                >
                  Siguiente
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6">
              <div className="bg-teal-50 rounded-xl p-5 mb-6 border border-teal-100">
                <h3 className="text-lg font-medium text-gray-800 mb-3">
                  ¡Ayúdanos con la fiesta!
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Elige una canción que no pueda faltar en la fiesta*
                  </label>
                  <input
                    type="text"
                    name="cancionFavorita"
                    placeholder="Nombre de la canción y artista"
                    required
                    value={formData.cancionFavorita}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border-none focus:outline-none focus:ring-2 focus:ring-teal-300"
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    * Esta información nos ayudará a preparar la playlist perfecta
                  </p>
                </div>
              </div>

              <div className="flex justify-between pt-4">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition shadow flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Anterior
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`px-6 py-3 rounded-lg text-white transition shadow-md hover:shadow-lg flex items-center ${
                    submitting ? "bg-teal-400 cursor-not-allowed" : "bg-teal-600 hover:bg-teal-700"
                  }`}
                >
                  {submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar confirmación
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}