import { expect } from 'chai';
<% if (testType == 'integration') { %>
import { describeComponent, it } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent('<%= dasherizedModuleName %>', 'helper:<%= dasherizedModuleName %>',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#<%= dasherizedModuleName %>}}
      //     template content
      //   {{/<%= dasherizedModuleName %>}}
      // `);
      this.set('inputValue', '1234');

      this.render(hbs`{{<%= dasherizedModuleName %> inputValue}}`);

      expect(this.$().text().trim()).to.equal('1234');
    });
  }
);
<% } else if (testType == 'unit') { %>import { describe, it } from 'mocha';
import { <%= camelizedModuleName %> } from '<%= dasherizedPackageName %>/helpers/<%= dasherizedModuleName %>';

describe('<%= friendlyTestName %>', function() {

  // TODO: Replace this with your real tests.
  it('works', function() {
    let result = <%= camelizedModuleName %>(42);
    expect(result).to.be.ok;
  });
});
<% } %>
