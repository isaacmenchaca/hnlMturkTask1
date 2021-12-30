     /* Initialize jsPsych */   
var jsPsych = initJsPsych({
      on_finish: function() {
        jsPsych.data.displayData();
      }
    });

  /* create timeline */
var timeline = [];
  
/* define welcome message trial */
var welcome = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: '<p style="font-size: 30px;">Welcome to the experiment. Press any key to begin.</p>'
  };
  
  /* define instructions trial */
var instructions = {
      type: jsPsychHtmlKeyboardResponse,
      stimulus: `
        <p>In this experiment, you will make a guess of whether a person 
          makes more or less than $50,000 per year.</p>
        <p>You will be displayed a <strong>table of the person's attributes</strong>,
          which you should use to determine their salary.
        <p>Press any key to begin.</p>
      `,
      post_trial_gap: 2000
    };

  /* define welcome message trial */
var display_table_stim_page = {
      type: jsPsychDisplayTableStim,
      table_contents: [['Age', '50', '4'],
                          ['Sex', 'Male', '3'], 
                          ['Race', 'White', '3'],
                          ['Marital Status', 'Married, spouse civilian', '4'], 
                          ['Years of Education', '10', '2'], 
                          ['Occupation', 'Executive and managerial', '5'],
                          ['Hours per week', '40', '2']  
                      ],
      header_labels: ['Attributes', 'Value', 'Chance'],
      preamble: '<p> Please select if this individual makes more or less than <b>$50,000</b> per year. </p>',
      button_label: 'Continue',
      answer: "lessThan50" // be careful, this is verbatim.
  };

var display_table_stim_page2 = {
      type: jsPsychDisplayTableStim,
      table_contents: [['Age', '50'],
                          ['Sex', 'Male'], 
                          ['Race', 'White'],
                          ['Marital Status', 'Married, spouse civilian'], 
                          ['Years of Education', '10'], 
                          ['Occupation', 'Executive and managerial'],
                          ['Hours per week', '40']  
                      ],
      header_labels: ['Attributes', 'Value'],
      preamble: '<p> Please select if this individual makes more or less than <b>$50,000</b> per year. </p>',
      button_label: 'Continue',
      answer: "greaterThan50" // be careful, this is verbatim.
  };

timeline.push(welcome);
timeline.push(instructions);
timeline.push(display_table_stim_page);
timeline.push(display_table_stim_page2);
timeline.push(display_table_stim_page2);
timeline.push(display_table_stim_page2);
timeline.push(display_table_stim_page2);

  /* start the experiment */
jsPsych.run(timeline);