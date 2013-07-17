/**
 * @object nodedit.workspace
 * 
 * Used to manage the nodedit workspace (filemanager and editor) loading
 */
nodedit.workspace = {
    
    /**
     * @method nodedit.workspace.init
     * 
     * Starts up the workspace after a successful session is establshed
     */
    init: function () {
        
        // Ensure the session
        if (nodedit.session()) {
            // Load the workspace
            nodedit.template('workspace.tpl')
                .done(function (tmpl) {
                    // Load DOM
                    nodedit.$el.html(tmpl);
                    // Initial Settings
                    nodedit.settings.init();
                    // Start filemanager
                    nodedit.filemanager.init();
                    // Start editor
                    nodedit.editor.init();
                });
        } else {
            // Failed session
            nodedit.message.error('Could not load session');
        }
        
    }
    
};