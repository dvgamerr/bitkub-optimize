module.exports = (sequelize, Sequelize) => {
    const Logs = sequelize.define(
        'Logs',
        {
            triggerID: {
                type: Sequelize.INTEGER,
                field: 'TriggerID',
                primaryKey: true
            },
            timestamp: {
                type: Sequelize.DATE,
                field: 'Timestamp'
            },
        },
        {
            timestamps: false,
            freezeTableName: true
        }
    );
    return Logs;
};