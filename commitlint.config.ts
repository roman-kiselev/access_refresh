module.exports = {
  rules: {
    'header-max-length': [2, 'always', 72],
    'subject-case': [2, 'never', ['start-case', 'pascal-case', 'upper-case']],
    'subject-full-stop': [2, 'never', '.'],
  },
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\d+): (.*)$/,
      headerCorrespondence: ['ticket', 'subject'],
    },
  },
};
