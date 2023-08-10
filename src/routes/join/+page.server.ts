import type { Actions } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';
import { fail, redirect } from '@sveltejs/kit';
import Joi from 'joi';
import { v4 as uuidv4 } from 'uuid';

interface Interests {
  ctf: boolean;
  lab: boolean;
  pentest: boolean;
  comp: boolean;
}

export const actions: Actions = {
  default: async ({ request, fetch, getClientAddress }) => {
    const formData = await request.formData();

    const BodyTypeSchema = Joi.object({
      name: Joi.string().required(),
      matrix: Joi.string().allow(''),
      email: Joi.string().email().required(),
      grade: Joi.string()
        .required()
        .pattern(/^0|9|1[012]$/)
        .message('Invalid grade'),
      i_ctf: Joi.string(),
      i_lab: Joi.string(),
      i_pentest: Joi.string(),
      i_comp: Joi.string(),
    });

    const validationError = BodyTypeSchema.validate(
      Object.fromEntries(formData.entries())
    ).error;

    if (validationError) {
      console.log(validationError);
      return fail(400, {
        success: false,
        message: String(validationError),
      });
    }

    let interest: Interests = {
      ctf: formData.get('i_ctf') ? true : false,
      lab: formData.get('i_lab') ? true : false,
      pentest: formData.get('i_pentest') ? true : false,
      comp: formData.get('i_comp') ? true : false,
    };

    const { error } = await supabase.from('registration').insert({
      id: uuidv4(),
      name: formData.get('name')!,
      matrix: formData.get('matrix') || '',
      email: formData.get('email')!,
      grade: formData.get('grade')!,
      interest: interest,
      paid: false,
    });

    if (error) {
      fail(500, { success: false });
      console.log(error);
    } else {
      redirect(302, '/success');
    }
  },
};
