myApp.controller('notificationController', function($rootScope, $scope, Notification) {
    var socket = io();
    $scope.hasElementClosed = false;
    socket.on('receiveNotification', function(data) {
        console.log('Received Message', data.msg);
        if (data.msg.ReceiverName.toUpperCase() == $rootScope.name) {
            $scope.primary(data.msg.message, data.msg.SenderName);
        }
    });
    $scope.primary = function(msg, sender) {
        Notification.primary({
            message: '' + msg + 'From:' + sender,
            delay: 5000,
            onClose: function(element) {
                $scope.hasElementClosed = true;
            }
        });
    };
    $scope.receiverName;
    $scope.receiverMessage;
    $scope.Send = function() {
        console.log($scope.receiverName);
        console.log($scope.receiverMessage);
        console.log($rootScope.name);
        socket.emit('sendNotification', {
            'msg': {
                SenderName: $rootScope.name,
                ReceiverName: $scope.receiverName,
                message: $scope.receiverMessage
            }
        });
    }
});