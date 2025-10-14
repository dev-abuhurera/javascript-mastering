// Execution context in Javascript


/*

    -> When we run a js program a [[[[[[Global Execution Context]]]]]] is created


    Two phases of Execution context--->>

        -->First is the memory creation phase

  //////////////////////////////////////////

        code:-

        n = 2;

        function square(num){

            var ans = num * num;
            return ans;
        
        }
        
        var square2 = square(n);
        var square4 = square(4);

  //////////////////////////////////////////

        memory              |||||||||         code

--->>   n : undefined           |   --> n : 2 (execution of the code)   

        square: {               |   -->> functions are not executed until invoked

        `whole function code 
         is here`               |   ---->>>  Function --->  invoke 

        }                       |   {They are like the mini programs and are invoked when the function is executed}

        square2: undefined      |   -> So, function invokation will Create a new execution context
                                        -------------------------------------------------------------------------------
        square4: undefined      |       ---->>>>>          memory                   ||||                code

        |||Memory allocation|||                    memory allocation occur for        |         n : 2
                                                   the variable and the funtions      |
                                                   in this location....               |
                                                                                                ans : 4

                                                   num : undefined                    |         return --> returns the control where the function was Envoked 

                                                   ans : undefined                    |



    ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

    ------>>>  When the whole function will be executed will be completely deleted and when the whole code is executed then the whole execution context will be finished

*/


/*            


                                                                                                [[[[[[[[ Call Stack ]]]]]]]]

--------->>> Call stack is to manage the exection contexts ----->> Main Execution context exit in the stack and whenever a new funciton is invoked a new exection context is created and thus the Stack Execution will be created inside the call stack and when the program is finished the whole execution stack is removed from the memory

                                                                            -- Call Stack also maintain the order of execution of the execution context



*/


