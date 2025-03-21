import React from "react";
import { useForm } from "react-hook-form";
import html2pdf from "html2pdf.js";
import emailjs from "@emailjs/browser";

const VisaApplicationForm = () => {
  const { register, handleSubmit, watch } = useForm();
  const watchSocialMedia = watch("redesSociales", false);

  const onSubmit = (data) => {
    // Generar PDF
    const pdfContent = document.getElementById("form-data");
    const pdfOptions = {
      margin: 1,
      filename: "formulario_visa.pdf",
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf()
      .set(pdfOptions)
      .from(pdfContent)
      .save()
      .then(() => {
        // Enviar PDF por correo
        emailjs
          .send(
            "YOUR_SERVICE_ID", // Reemplaza con tu Service ID
            "YOUR_TEMPLATE_ID", // Reemplaza con tu Template ID
            {
              to_name: "Carol Marte Abad",
              message: "Adjunto el formulario de visa en PDF.",
              email: data.email,
            },
            "YOUR_USER_ID" // Reemplaza con tu User ID
          )
          .then(
            () => alert("Formulario enviado con éxito."),
            (err) => alert("Error al enviar el formulario: " + err.text)
          );
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Formulario de Solicitud de Visa
      </h1>
      <form
        id="form-data"
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <h2 className="text-lg font-semibold">Información Personal</h2>
        <div className="space-y-2">
          <input
            {...register("apellidos", { required: true })}
            placeholder="Apellidos"
            className="w-full p-2 border rounded"
          />
          <input
            {...register("nombres", { required: true })}
            placeholder="Nombres"
            className="w-full p-2 border rounded"
          />
          <input
            {...register("otrosNombres")}
            placeholder="¿Ha usado otros nombres?"
            className="w-full p-2 border rounded"
          />
          <select
            {...register("sexo", { required: true })}
            className="w-full p-2 border rounded"
          >
            <option value="">Seleccione Sexo</option>
            <option value="M">Masculino</option>
            <option value="F">Femenino</option>
          </select>
          <input
            {...register("fechaNacimiento", { required: true })}
            type="date"
            className="w-full p-2 border rounded"
          />
        </div>

        <h2 className="text-lg font-semibold">Dirección y Contacto</h2>
        <div className="space-y-2">
          <input
            {...register("direccion", { required: true })}
            placeholder="Dirección"
            className="w-full p-2 border rounded"
          />
          <input
            {...register("email", { required: true })}
            placeholder="Correo Electrónico"
            className="w-full p-2 border rounded"
          />
          <input
            {...register("telefono", { required: true })}
            placeholder="Teléfono"
            className="w-full p-2 border rounded"
          />
        </div>

        <h2 className="text-lg font-semibold">Información del Pasaporte</h2>
        <div className="space-y-2">
          <input
            {...register("numeroPasaporte", { required: true })}
            placeholder="Número de Pasaporte"
            className="w-full p-2 border rounded"
          />
          <input
            {...register("paisEmisor", { required: true })}
            placeholder="País Emisor"
            className="w-full p-2 border rounded"
          />
          <input
            {...register("lugarEmision", { required: true })}
            placeholder="Lugar de Emisión"
            className="w-full p-2 border rounded"
          />
        </div>

        <h2 className="text-lg font-semibold">Redes Sociales</h2>
        <div className="space-y-2">
          <label>
            <input type="checkbox" {...register("redesSociales")} /> ¿Tiene
            redes sociales?
          </label>
          {watchSocialMedia && (
            <div className="space-y-2">
              <input
                {...register("facebook")}
                placeholder="Facebook"
                className="w-full p-2 border rounded"
              />
              <input
                {...register("instagram")}
                placeholder="Instagram"
                className="w-full p-2 border rounded"
              />
              <input
                {...register("tiktok")}
                placeholder="TikTok"
                className="w-full p-2 border rounded"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Enviar Formulario
        </button>
      </form>
    </div>
  );
};

export default VisaApplicationForm;
