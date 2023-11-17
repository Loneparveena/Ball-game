export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'enterName' : IDL.Func([IDL.Text], [IDL.Text], []) });
};
export const init = ({ IDL }) => { return []; };
