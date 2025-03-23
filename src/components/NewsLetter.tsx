import { Link } from 'react-router-dom';
import { countriesList } from '@/constants/countries.constants';
import Select from './inputs/Select';
import { Controller, useForm } from 'react-hook-form';

const NewsletterForm = () => {
  // REACT HOOK FORM
  const { control, handleSubmit } = useForm();

  // HANDLE SUBMIT
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <section className="w-full max-w-5xl mx-auto bg-[#f4f1ea] p-12 my-12">
      <article className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <header>
          <h3 className="font-heading text-4xl md:text-5xl text-[#222222] mb-6">
            Get in Touch
            <br /> with Us
          </h3>
        </header>

        <article>
          <p className="text-[#222222] mb-6">
            We'd love to hear from you. Please fill out the form below to
            contact us.
          </p>

          <form onSubmit={onSubmit} className="space-y-4">
            <fieldset className="w-full flex flex-col gap-4">
              <ul className="w-full grid grid-cols-2 gap-4">
                <li>
                  <Controller
                    control={control}
                    name="firstName"
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        className="bg-[#e2dfd7] p-3 text-[#222222] w-full"
                        placeholder="First name"
                      />
                    )}
                  />
                </li>
                <li>
                  <Controller
                    control={control}
                    name="surname"
                    render={({ field }) => (
                      <input
                        {...field}
                        className="bg-[#e2dfd7] p-3 text-[#222222] w-full"
                        placeholder="Surname"
                      />
                    )}
                  />
                </li>
              </ul>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <input
                    {...field}
                    className="bg-[#e2dfd7] p-3 text-[#222222] w-full"
                    placeholder="Email Address"
                  />
                )}
              />
            </fieldset>

            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <Select
                  className="bg-[#e2dfd7] cursor-pointer !h-[45px] p-3 text-[#222222] w-full"
                  {...field}
                  options={countriesList?.map((country) => ({
                    label: country.name,
                    value: country.code,
                  }))}
                />
              )}
            />

            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  placeholder="Your Message"
                  className="bg-[#e2dfd7] p-3 text-[#222222] w-full h-32 resize-none"
                />
              )}
            />

            <Link
              to="/contact"
              className="flex items-center mt-6 group"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              <figure className="w-10 h-10 rounded-full border border-[#FF5C28] flex items-center justify-center group-hover:bg-[#FF5C28] transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#FF5C28] group-hover:text-white transition-colors duration-300"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </figure>
              <span className="ml-2 text-[#222222] uppercase tracking-wider text-sm font-medium">
                SEND MESSAGE
              </span>
            </Link>
          </form>
        </article>
      </article>
    </section>
  );
};

export default NewsletterForm;
