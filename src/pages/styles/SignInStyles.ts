const SignInStyles: any = {
  formCompanyText: {
    fontSize: '30px !important',
    fontWeight: '700 !important',
    color: '#7108aa !important',
    marginLeft: '8px !important',
  },
  logo: {
    // width: 259,
    height: 141,
  },
  formInfoText: {
    display: 'flex !important',
    justifyContent: 'space-between !important',
    alignItems: 'center !important',
  },
  formTitle: {
    display: 'flex !important',
    justifyContent: 'center !important',
    alignItems: 'flex-end !important',
  },
  formSubtitle: {
    display: 'flex !important',
    justifyContent: 'center !important',
  },
  formSignInText: {
    fontSize: '20px !important',
    fontWeight: '500 !important',
    lineHeight: '38px !important',
  },
  LoginImage: {
    height: 'calc(100vh - 84px)',
  },
  loginContent: {
    height: '100vh',
    padding: 42,
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
  },
  formContent: {
    backgroundColor: '#F4F4F4',
    borderRadius: 8,
    zIndex: '999',
  },
  formAccount: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formLoginButton: {
    color: '#7108aa !important',
    textTransform: 'capitalize !important',
    marginLeft: '8px !important',
    textDecoration: 'none !important',
    fontSize: '16px !important',
    cursor: 'pointer',
  },
  formLoginImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    width: '100%',
    backgroundColor: '#ECECEC',
    borderRadius: 8,
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.16)',
  },
  '@media (min-width: 900px) and (max-width: 1312px)': {
    formContent: {
      minWidth: '410px !important',
    },
    formLoginImage: {
      maxWidth: 'calc(100% - 410px) !important',
    },
  },
  '@media (min-width: 600px) and (max-width: 899px)': {
    formContent: {
      maxWidth: '410px',
    },
    loginContent: {
      justifyContent: 'center',
    },
  },
  '@media (max-width: 899px)': {
    formLoginImage: {
      display: 'none',
    },
    formCompanyText: {
      fontSize: 24,
    },
    formText: {
      fontSize: 24,
      lineHeight: '36px',
    },
    formContent: {
      display: 'flex',
    },
  },
  '@media (max-width: 600px)': {
    formCompanyText: {
      fontSize: 24,
    },
    loginContent: {
      padding: 16,
    },
    formGroup: {
      padding: 16,
    },
  },
};

export default SignInStyles;
