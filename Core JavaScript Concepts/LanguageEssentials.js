/*

Javascript --->> interpreted language --->> just write the code == execute --> no seperate compilation environment setup or anything

write - execute

-----------------------------------------------------


Javascript -->> ((((J I T)))

JUST IN TIME --->> Compiled Language


-------------------------------------------------------

javascript code running process:-

javascript code ---> convert into tokens --->> convert into the Abstract syntax structure (AST) ----->>> it is where the javascript engine understand that what is the different code parts and here all hte optimization and eveything happens 


--------------


Just in time compilation:-

Pure Interpreted Languages (old JavaScript):--

Write code → Run immediately by reading line-by-line
              (no wait)              (slower)

It is very slow even the code that runs millions of time compiled slowly.....

--------------------

Solution:-

Write code → Start with interpreter → Detect hot 
code → Compile ONLY hot code

--------------------------------------Visual Representation of What actually happens---------------------------------------

                                ┌─────────────────────────────────────────────────────────────┐
                                │                    YOUR JAVASCRIPT CODE                     │
                                │                   function square(n) {                      │
                                │                     return n * n;                           │
                                │                   }                                         │
                                └─────────────────────────────────────────────────────────────┘
                                                        ↓
                                ┌─────────────────────────────────────────────────────────────┐
                                │                     PARSING & BYTECODE                      │
                                │              (Happens once when code is loaded)             │
                                └─────────────────────────────────────────────────────────────┘
                                                        ↓
                                ┌───────────────────┴───────────────────┐
                                ↓                                       ↓
                                ┌──────────────────┐                 ┌──────────────────────┐
                                │   INTERPRETER    │                 │      PROFILER        │
                                │                  │                 │   (Silent Watcher)   │
                                │  Executes        │◄───watching────│                      │
                                │  bytecode        │                 │  Counting calls      │
                                │  (slow but       │                 │  Recording types     │
                                │   works)         │                 │  Detecting patterns  │
                                │                  │                 │                      │
                                │  Call 1-100      │                 │  "Is it HOT yet?"    │
                                └──────────────────┘                 └──────────────────────┘
                                                                        │
                                                                        │ Call 101
                                                                        │ "YES! HOT!" 🔥
                                                                        ↓
                                                                ┌──────────────────────┐
                                                                │    JIT COMPILER      │
                                                                │                      │
                                                                │  1. Get profiler data│
                                                                │  2. Make assumptions │
                                                                │  3. Generate machine │
                                                                │     code             │
                                                                │  4. Add guards       │
                                                                │  5. Replace interp.  │
                                                                └──────────────────────┘
                                                                        ↓
                                                                ┌──────────────────────┐
                                                                │  OPTIMIZED MACHINE   │
                                                                │       CODE           │
                                                                │   (CPU instructions) │
                                                                │                      │
                                                                │  Call 102+           │
                                                                │  ⚡ Super fast! ⚡    │
                                                                └──────────────────────┘

// --------------------------------------------------------------------------------------------------------

Javascript has a runtime environment ---> (Javascript runtime environment)

---->>>> 

javascript runtime environment ---> contains --->>

1. Js Engine ------------------------------
2. Api's ------------------------------
3. Event Loop ------------------------------
4. call queue ------------------------------
5. call stack ------------------------------

etc----


we can run our javascript code anywhere because of this runtime environment


---> Browser, nodejs --->> Runtime Environment -->>> Javascript --->>>> Having the js engine - api - event loop - etc


--------------------------------------->>> What is the Js Engine???? 


Javascript Engine ||| It is Nothing but a piece of Code ---->> Written in low level Languages (V8 in C++) ----->>> 


Take in the Js Code ---->>> high level Language -- Convert -- Low level Language


----------------------------------->> What Happens inside the JavaScript Engine <<------------------------------------------


--> Steps involve in the Javascript engine :-


 - Three Steps involve in this js engine ---------->>

 .  Parsing

 .  Compilation

 .  Execution

---------------------------------------------------


Parsing --->> take the code and convert into the tokens

eg --- let a = "Ali"

let is a token, a is a token, = is a token, ali is a token


--> Syntax parsers -> Convert these token ---> AST (abstract syntax tree) 

Now ---> this AST is going to converted into the Compilation phase


-----------------------------------------------------------------


Compilation ---->>> JUST IN TIME COMPILATION


- Interpretor ?

- Compiler ?

------>     <------

Interpretor _____ takes you code and execute it line by line it doesnot know what is in the next line 


Compiler ---> convert the code to the Optimized form --> Then Execute

// -------------------------------------------------------------------------------------------------

Js is both ----(((Compiled + interpreted)))

//-----------------------------------------------------------


- Compilation + Execution Goes hand in hand


Now ---->> We get the (((A S T))) ----->>> move in the Interpretor ------->>>> and converted to the bytecode --> execution ====>> 

`Interpretor` while execution ---->>> help ---->>> Interpretor ==>>> optimize the code <------


                        ----> "compiler - optimize the code - at the runtime" <---- (JUST IN TiME COMPILATION) --> create the bytecode

                                                        Move to the execution phase



                                                   -----     Execution   ----      


//                                    [Execution ---> Two Major Components ---> (Memory heap) and (Call Stack)]


Memory heap and call Stack --> Exist in the js engine


CallStack ----> Every execution content come in and pop out --->>>

   
                                | Memory heap (Where everything is stored) | connected to the callStack | Garbage Collector | 



Garbage Collector --->> memory heap --->> Tries to free up the space -->>> if anything is not in execution stage or all it will free up the memory

    | ---> Work with the MArk AND Sweep Algorithm



    EXample ---->>

    V8 engine of the chrome --->> Ignition interpretor

    along Turbofan Optimizing Compiler 

    V8 engine 

        +               ------>>>  V8 - engine

     Turbofan
    optimization

// ------------------------------------------------------------------------------------------------------





















*/