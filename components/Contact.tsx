const Contact = () => {
  return (
    <section id="contact">
      {/* Container */}
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        {/* Component */}
        <div className="bg-grid-small-black-300 p-8 text-center sm:p-10 md:p-16 rounded-lg shadow-lg">
          {/* Title */}
          <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Get in Touch
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-white md:mb-10">
            Interested in working together? Fill out the form below with some information about your project, and I will get back to you as soon as I can.
          </p>
          {/* Form */}
          <form
            name="contact-form"
            method="post"
            className="relative mx-auto mb-4 flex w-full max-w-2xl flex-col items-start justify-center sm:flex-row"
          >
            <input
              type="email"
              className="mb-3 mr-6 block h-12 w-full bg-black-100 text-gray-200 px-6 py-3 text-sm placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-200 sm:mb-0"
              placeholder="Enter your email"
              required
            />
            <input
              type="submit"
              value="Submit"
              className="inline-block w-full cursor-pointer bg-black-300 hover:bg-black-200 px-6 py-3 text-center font-semibold text-white transition duration-300 ease-in-out rounded-lg shadow-lg sm:w-28"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
