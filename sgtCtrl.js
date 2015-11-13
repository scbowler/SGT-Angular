app.controller('sgtCtrl', function($scope){
    $scope.edit = false;
    $scope.students = [
        {id:1, sName: 'Bob Fish', course: 'Applied Physics', grade: 87},
        {id:2, sName: 'Tom Crew', course: 'Scientology', grade: 98},
        {id:3, sName: 'Bill Yates', course: 'iOS Development', grade: 74},
        {id:4, sName: 'Dan Pasc', course: 'Analogies 101', grade: 100}
    ];

    $scope.newId = function(){
        return $scope.students[$scope.students.length-1].id + 1;
    };

    $scope.average = function(){
        var len = $scope.students.length;
        var total = 0;
        for(var i=0; i<len; i++){
            total += parseFloat($scope.students[i].grade);
        }
        return Math.floor(total/len) + "%";
    };

    $scope.addStudent = function(){
        if($scope.edit){
            var student = $scope.students[$scope.index];
            student.sName = $scope.sName;
            student.course = $scope.course;
            student.grade = $scope.grade;
        }else {
            var student = {
                id: $scope.newId(),
                sName: $scope.sName,
                course: $scope.course,
                grade: $scope.grade
            };
            $scope.students.push(student);
        }
        $scope.clearForm();
        console.log($scope.students);
    };

    $scope.delStudent = function(obj){
        if($scope.setIndex(obj)) {
            $scope.students.splice($scope.index, 1);
        }
    };

    $scope.clearForm = function(){
        $scope.sName = '';
        $scope.course = '';
        $scope.grade = '';
        $scope.edit = false;
    };

    $scope.editStudent = function(obj){
        if($scope.setIndex(obj)) {
            $scope.sName = obj.sName;
            $scope.course = obj.course;
            $scope.grade = obj.grade;
            $scope.edit = true;
        }
    };

    $scope.setIndex = function(obj){
        $scope.index = $scope.students.indexOf(obj);
        if($scope.index > -1){
            return true;
        }
        return false;
    }
});