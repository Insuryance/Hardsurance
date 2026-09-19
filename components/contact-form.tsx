'use client';

import {
  useEffect,
  useState,
  type FormEvent,
} from 'react';

type FormStatus =
  | 'idle'
  | 'submitting'
  | 'success'
  | 'error';

export function ContactForm() {
  const [status, setStatus] =
    useState<FormStatus>('idle');

  useEffect(() => {
    if (status !== 'success') return;

    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setStatus('idle');
      }
    };

    window.addEventListener('keydown', closeWithEscape);

    return () => {
      window.removeEventListener(
        'keydown',
        closeWithEscape,
      );
    };
  }, [status]);

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const form = event.currentTarget;

    setStatus('submitting');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <form
        action="https://formspree.io/f/xkoelqyb"
        method="POST"
        onSubmit={handleSubmit}
      >
        <label>
          Name
          <input
            required
            name="name"
            autoComplete="name"
          />
        </label>

        <label>
          Work email
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
          />
        </label>

        <label>
          Company
          <input
            required
            name="company"
            autoComplete="organization"
          />
        </label>

        <label>
          What are you building?
          <textarea name="message" rows={3} />
        </label>

        <button
          className="button primary"
          type="submit"
          disabled={status === 'submitting'}
        >
          {status === 'submitting'
            ? 'Sending request…'
            : 'Request a founder review'}
        </button>

        {status === 'error' ? (
          <p className="form-error" role="alert">
            Something went wrong. Please email
            contact@hardsurance.com.
          </p>
        ) : null}
      </form>

      {status === 'success' ? (
        <div
          className="form-success-backdrop"
          role="presentation"
          onMouseDown={() => setStatus('idle')}
        >
          <section
            className="form-success-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="form-success-title"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >
            <span className="form-success-index">
              Request received
            </span>

            <h2 id="form-success-title">
              Thank you.
            </h2>

            <p>
              Your review request has been received. The
              Hardsurance team will respond using the work
              email you provided.
            </p>

            <button
              type="button"
              className="button primary"
              onClick={() => setStatus('idle')}
            >
              Return to Hardsurance
            </button>
          </section>
        </div>
      ) : null}
    </>
  );
}
