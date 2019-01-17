// JavaScript Document Varun Dewan 2019

var data = [
   {
      "title":"Ada",
      "description":"Programming language dedigned for programming embedded applications"
   },
   {
      "title":"ADT",
      "description":"Abstract data type"
   },
   {
      "title":"ADT",
      "description":"hidden <a href=\"#implementation\">implementation</a> details"
   },
   {
      "title":"ASCII",
      "description":"The original common character code for computers using 8 bits"
   },
   {
      "title":"BNF",
      "description":"Backus Naur Form. An old version of a popular way to define syntax of programming languages"
   },
   {
      "title":"Boolean",
      "description":"Any data type that follows George Boole's algebraic axioms"
   },
   {
      "title":"C++",
      "description":"Hibrid child of C with object oriented features and <a href=\"#generic\">generic</a> fuunctions and classes"
   },
   {
      "title":"C++",
      "description":"BJarne Stroustroup's C++"
   },
   {
      "title":"COBOL",
      "description":"COmmon Business Oriented Language"
   },
   {
      "title":"EBNF",
      "description":"Extended BNF.  A popular way to define syntax as a dictionary of terms defined by using iteration, options, alternatives, etc"
   },
   {
      "title":"FORTRAN",
      "description":"FORmula TRANslation"
   },
   {
      "title":"HTML",
      "description":"HyperText Markup Language"
   },
   {
      "title":"Java",
      "description":"Object oriented language that has a C-like syntax"
   },
   {
      "title":"Java",
      "description":"a language for consumer boxes"
   },
   {
      "title":"LISP",
      "description":"LISt Processing language"
   },
   {
      "title":"PL",
      "description":"Programming Language"
   },
   {
      "title":"Prolog",
      "description":"PROgramable LOGic"
   },
   {
      "title":"Scheme",
      "description":"a modern statically <a href=\"#scoped\">scoped</a> version of <a href=\"#LISP\">LISP</a>"
   },
   {
      "title":"UNICODE",
      "description":"a new 16 bit International code for characters"
   },
   {
      "title":"XBNF",
      "description":"An extension to EBNF invented by Dr. Botting so that ASCII can be used to describe formal syntax and semantics"
   },
   {
      "title":"abstract",
      "description":"algebras and logics that describe several different concrete algebras and logics"
   },
   {
      "title":"abstract",
      "description":"descriptions that do not swamp you with unnecessary detail -- they provide enough information to use something without knowing its detailed construction"
   },
   {
      "title":"accessor",
      "description":"a <a href=\"#method\">method</a> or member <a href=\"#function\">function</a> that does not change the object to which it is applied, also known as a \"const\" function."
   },
   {
      "title":"actual_parameter",
      "description":"Any <a href=\"#parameter\">parameter</a> in the <a href=\"#call\">call</a> of a <a href=\"#subprogram\">subprogram</a>"
   },
   {
      "title":"algorithm",
      "description":"A description in precise but natural language plus mathematical notation of how a problem is solved"
   },
   {
      "title":"alias",
      "description":"Two names or identifiers are aliases if they name or identify the same thing"
   },
   {
      "title":"argument",
      "description":"A heated discussion"
   },
   {
      "title":"arithmetic_operations",
      "description":"addition, subtraction, multiplication and division ideally forming an <a href=\"#ADT\">ADT</a> with the algebraic properties of a ring or field"
   },
   {
      "title":"array",
      "description":"Each array associates each value of one data type with a unique object of another type"
   },
   {
      "title":"assignment",
      "description":"A statement with an expression and a variable.  The expression is evaluated and the result is stored in the variables"
   },
   {
      "title":"associativity",
      "description":"rules for determining which of two identical infix operators should be evaluated first"
   },
   {
      "title":"bind",
      "description":"to create a <a href=\"#binding\">binding</a>"
   },
   {
      "title":"binding",
      "description":"A relationship between two things, typically an identifier and some one of its properties or attributes"
   },
   {
      "title":"binary",
      "description":"pertaining to 2"
   },
   {
      "title":"bit",
      "description":"<a href=\"#binary\">binary</a> digit"
   },
   {
      "title":"block",
      "description":"A piece of source code that has one or more declarations in it"
   },
   {
      "title":"boolean",
      "description":"mispelling of <a href=\"#Boolean\">Boolean</a>"
   },
   {
      "title":"bound",
      "description":"result of <a href=\"#binding\">binding</a>"
   },
   {
      "title":"byte",
      "description":"eight bits"
   },
   {
      "title":"call",
      "description":"A piece of code that transfers control, temporarily, to a subprogram and suspends the original code until the subprogram returns to the following statement etc"
   },
   {
      "title":"call",
      "description":"to make use of something by writing its name and the correct protocol"
   },
   {
      "title":"call_by",
      "description":"oldfashioned way of saying: pass_by(X)"
   },
   {
      "title":"ccc",
      "description":"ccc.h is a C++ <a href=\"#header_file\">header_file</a> created by Cay Horstman for teaching C++ that we use in out CS1/CS2 courses. A copy has been downloaded onto our CS201/CS202 machines and the lab instructions show how to use it."
   },
   {
      "title":"chain",
      "description":"any kind of <a href=\"#linked_list\">linked_list</a>, a set of records where each record identifies the next record in some sequence or other"
   },
   {
      "title":"class",
      "description":"a description of a collection of objects that have similar structures and behaviors"
   },
   {
      "title":"code",
      "description":"a piece of text that can not be understood without a key, hence the source code for a program"
   },
   {
      "title":"coercion",
      "description":"an implicit type conversion that lets a smart compiler work out the wrong meaning for a programmers typing mistake"
   },
   {
      "title":"compile",
      "description":"translate source code into executable object code"
   },
   {
      "title":"component",
      "description":"a part of a compound statement or object"
   },
   {
      "title":"compound",
      "description":"a single statement or object that can have any number of other statements as its parts"
   },
   {
      "title":"conditional",
      "description":"an expression or statement that selects one out of a number of alternative subexpressions"
   },
   {
      "title":"control_statement",
      "description":"statements that permit a processor to select the next of several possible computations according to various conditions"
   },
   {
      "title":"constructor",
      "description":"a method or function in a class that creates a new object of that class"
   },
   {
      "title":"data_type",
      "description":"A collection of values together with the operations that use them and produce them, plus the assumptions that can be made about the operations and values"
   },
   {
      "title":"declaration",
      "description":"A piece of source code that adds a name to the program's <a href=\"#environment\">environment</a> and binds it to a class of meanings, and may also define the name"
   },
   {
      "title":"default",
      "description":"An item provided in place of an omitted item"
   },
   {
      "title":"define",
      "description":"What a definition does"
   },
   {
      "title":"definition",
      "description":"A piece of source code or text that binds a name to a precise \"definite\" meaning. A definition may implicitly also declare the name at the same time or <a href=\"#bind\">bind</a> more information to an already defined name"
   },
   {
      "title":"dynamic",
      "description":"something that is done as the program runs rather than by the compiler before the program runs"
   },
   {
      "title":"dynamic_binding",
      "description":"A binding that can be made at any time as a program runs and may change as the program runs"
   },
   {
      "title":"dynamically_scoped",
      "description":"something that uses <a href=\"#dynamic_scoping\">dynamic_scoping</a>"
   },
   {
      "title":"dynamic_scoping",
      "description":"determining the global <a href=\"#environment\">environment</a> of a subprogram as that which surrounds its call"
   },
   {
      "title":"dynamic_polymorphism",
      "description":"A kind of polymorphism where the current type of an object determines which of several alternate subprograms are invoked as the program runs"
   },
   {
      "title":"encapsulated",
      "description":"coding that can be changed with out breaking client code"
   },
   {
      "title":"encapsulated",
      "description":"being able to place all relevant information in the same piece of code -- for example data and the operations that manipulate it in a C++ class"
   },
   {
      "title":"encapsulation",
      "description":"The ability to hide unwanted details inside an interface so that the result works like a black box or vending machine - providing useful services to many clients(programs or people)"
   },
   {
      "title":"enumerated",
      "description":"data defined by listing its possible values"
   },
   {
      "title":"exception",
      "description":"a mechanism for handling abnormal situations"
   },
   {
      "title":"expression",
      "description":"A shorthand description of a calculation"
   },
   {
      "title":"float",
      "description":"short floating point data type"
   },
   {
      "title":"floating_point",
      "description":"A form of arithmetic that always preserves the same number of digits but allows the decimal point to be placed anywhere among them.  This gives unbounded errors, a wider range and a more complex processor"
   },
   {
      "title":"formal",
      "description":"something that is abstract or mathematical"
   },
   {
      "title":"formal_parameter",
      "description":"The symbol used inside a <a href=\"#subprogram\">subprogram</a> in place of the <a href=\"#actual_parameter\">actual_parameter</a> provided when the <a href=\"#subprogram\">subprogram</a> is called"
   },
   {
      "title":"function",
      "description":"A subprogram that returns a value but can not change its parameters or have side effects"
   },
   {
      "title":"function",
      "description":"Any subprogram"
   },
   {
      "title":"function",
      "description":"What you do to earn your pay"
   },
   {
      "title":"function",
      "description":"A total many to one relation between a domain and a codomain"
   },
   {
      "title":"generic",
      "description":"Something that is common accross several species or individuals"
   },
   {
      "title":"generic",
      "description":"A package or Subprogram that can generate a large number of similar yet different packages or subprograms"
   },
   {
      "title":"global",
      "description":"Something that can be used in all parts of program"
   },
   {
      "title":"goto",
      "description":" a 4 letter word no longer considered correct that is still usable in all practical languages to indicate an unconditional jump"
   },
   {
      "title":"grammar",
      "description":"A set of definitions that define the syntax of a language. A grammar generates the strings in the language and so implicitly describes how to recognize and parse strings in the language"
   },
   {
      "title":"hardware",
      "description":"The part of a computer system that is damaged when dropped from a suitable hieght onto a hard floor"
   },
   {
      "title":"header",
      "description":"the first part of a function definition that describes how to call the function but does not describe what it does.  The header defines the fucntion's signature. A function header can be separated from its function when the body of the function is replaced by a semicolon.  This allows <a href=\"#information_hiding\">information_hiding</a> and separte development."
   },
   {
      "title":"header_file",
      "description":"A collection of function headers, class interfaces, constants and definitions that is read by a compiler and changes the interpretation of the rest of the program by (for example) defining operation for handling strings."
   },
   {
      "title":"heap",
      "description":"Storage that can be allocated and deallocated on demand in any pattern"
   },
   {
      "title":"hidden",
      "description":"result of <a href=\"#hiding\">hiding</a>"
   },
   {
      "title":"hiding",
      "description":"Process  of puting something out of sight, out of mind, and/or out of reach"
   },
   {
      "title":"identity_operation",
      "description":"An operation that returns its arguments unchanged"
   },
   {
      "title":"identity",
      "description":"An equation that is true for all values of its variables"
   },
   {
      "title":"ignorance",
      "description":"the comforting result of ignoring something"
   },
   {
      "title":"implementation",
      "description":"the way something is made to work.  The grubby details of code and data structures. There are usually many ways to implement something."
   },
   {
      "title":"implemented",
      "description":"X is implemented by Y"
   },
   {
      "title":"in",
      "description":"A way of handling parameters that gives a subprogram access to the value of an actual parameter without permitting the subprogram to change the actual parameter. OFten implemented by <a href=\"#pass_by_value\">pass_by_value</a>"
   },
   {
      "title":"infix",
      "description":"An operator that is placed between operands.  Infix notation dates back to the invention of algebra 3 or 4 hundred years ago"
   },
   {
      "title":"information_hiding",
      "description":"The doctrine that design choices should be hidden by the modules in which they are implemented"
   },
   {
      "title":"information_hiding",
      "description":"not being allowed to read the code"
   },
   {
      "title":"inheritance",
      "description":"The abillity to easily construct new data types or classes by extending existing structures, data types, or classes"
   },
   {
      "title":"inout",
      "description":"A way of handling parameters that lets a subprogram both use and change the values of an actual parameter. It can be implemented by <a href=\"#pass_by_reference\">pass_by_reference</a>, pass_by_name, or pass_by_value_result"
   },
   {
      "title":"input",
      "description":"data supplied to some program, subprogram, OS, machine, system, or abstraction"
   },
   {
      "title":"int",
      "description":"<a href=\"#fixed_point\">fixed_point</a> data representing a subset of the whole numbers"
   },
   {
      "title":"interpreter",
      "description":"A program that translates a single instruction of a prgram and executes it before moving on to the next one"
   },
   {
      "title":"item",
      "description":"A <a href=\"#component\">component</a> in a <a href=\"#compound\">compound</a> data <a href=\"#structure\">structure</a>"
   },
   {
      "title":"iteration",
      "description":"see <a href=\"#loop\">loop</a>"
   },
   {
      "title":"iterator",
      "description":"an object that is responsible for tracking progress through a collection of other objects.  Often it is implemented as a reference or pointer plus <a href=\"#methods\">methods</a> for navigating the set of objects"
   },
   {
      "title":"link",
      "description":"to connect to things together.  In computing: to place addresses in one part of memory so that they identify other parts of memory."
   },
   {
      "title":"loader",
      "description":"nowadays a <a href=\"#link_loader\">link_loader</a>, in the past any program that placed an executable program and placed it into memory."
   },
   {
      "title":"local",
      "description":"related to the current instruction rather than a larger context"
   },
   {
      "title":"logical",
      "description":"In accordance with the speakers preconceptions"
   },
   {
      "title":"long",
      "description":"A <a href=\"#Fixed_point\">Fixed_point</a> data type that may have more bits than ints"
   },
   {
      "title":"loop",
      "description":"see <a href=\"#iteration\">iteration</a>"
   },
   {
      "title":"maps",
      "description":"plural of <a href=\"#map\">map</a>"
   },
   {
      "title":"mapping",
      "description":"A relationship that takes something and turns it into something uniquely determined by the relationship"
   },
   {
      "title":"mathematical_expression",
      "description":"horror, diligence, worry, and (rare) relief"
   },
   {
      "title":"Matrix",
      "description":"An <a href=\"#ADT\">ADT</a> that can be <a href=\"#implemented\">implemented</a> by rectangular arrays and has many of the <a href=\"#arithmetic_operations\">arithmetic_operations</a> defined on them.  A matrix abstracts the structure and behavior of linear <a href=\"#maps\">maps</a>"
   },
   {
      "title":"method",
      "description":"a step by step prescription of a way to achieve some class of goal"
   },
   {
      "title":"method",
      "description":"a more or less rigorous set of rules that may help solve some set of problems"
   },
   {
      "title":"method",
      "description":"something that an object can perform or suffer often determined by the class of the object rather than the specific object"
   },
   {
      "title":"methodology",
      "description":"an expensive and overly complicated method"
   },
   {
      "title":"methodology",
      "description":"The studey of methods"
   },
   {
      "title":"narrowing",
      "description":"a conversion that converts an object to a type that cannot include all the possible values of the object"
   },
   {
      "title":"natural_numbers",
      "description":"The numbers 1,2,3,4.."
   },
   {
      "title":"object",
      "description":"A piece identifiable storage that can suffer and/or perform various operations defined by the objects type"
   },
   {
      "title":"object",
      "description":"Something that is uniqely identifiable by the user"
   },
   {
      "title":"object",
      "description":"A module that encapsulates a degree of intelligence and know how and has speciallized responsibilities"
   },
   {
      "title":"operation",
      "description":"One of a set of functions with special syntax and semantics that can be used to construct an <a href=\"#expression\">expression</a>"
   },
   {
      "title":"operator",
      "description":"A symbol for an <a href=\"#operation\">operation</a>"
   },
   {
      "title":"operator_associativity",
      "description":"rules that help define the order in which an expression is evaluated when two adjacent infix operators are identical"
   },
   {
      "title":"operator_precedence",
      "description":"rules that help define the order in which an expression is evaluated when two infix operators can be done next"
   },
   {
      "title":"out",
      "description":"Any mode of passing parameters that permits the subprogram to give a value to an actual parameter without letting the subprogram no what the original value of the subprogram.  Only available for general parameters in ada, it can be implemented by <a href=\"#pass_by_result\">pass_by_result</a>"
   },
   {
      "title":"output",
      "description":"A means whereby data or objects are passed from a part to a wider context"
   },
   {
      "title":"overloading",
      "description":"giving multiple meanings to a symbol depending on its context"
   },
   {
      "title":"overload",
      "description":"to provide multiple context dependent meanings for a symbol in a language"
   },
   {
      "title":"parameter",
      "description":"A variable constant, or perhaps a constant variable"
   },
   {
      "title":"parameter",
      "description":"Something that is used in a subprogram that can be changed when the subprogram is called"
   },
   {
      "title":"parameter_passing",
      "description":"the means by which the <a href=\"#actual_parameters\">actual_parameters</a> in a <a href=\"#call\">call</a> of a <a href=\"#subprogram\">subprogram</a> are connected with the <a href=\"#formal_parameters\">formal_parameters</a> in the definition of the subprogram"
   },
   {
      "title":"pass_by_value",
      "description":"The actual parameter is evaluated (if necessary) and the value placed in a location bound to the formal parameter"
   },
   {
      "title":"pass_by_reference",
      "description":"The parameter is implemented by providing an access path to the actual parameter from the formal parameter.  Actions written as if they use or change the formal parameter use or change the actual parameter instead"
   },
   {
      "title":"pertaining",
      "description":"a neat word to put at the start of a definition indicating some kind of loose but intuitive connection"
   },
   {
      "title":"physical",
      "description":"In accordance with the speakers hardware"
   },
   {
      "title":"pointer",
      "description":"values that are addresses of other items of data"
   },
   {
      "title":"polymorphism",
      "description":"The ability of a function to apply to more than one type of object or data"
   },
   {
      "title":"parametric_polymorphism",
      "description":"A piece of code describes a general form of some code by using a parameter.  Different instances or special cases are created by replace these parameters by actual parameters"
   },
   {
      "title":"positional_parameter",
      "description":"A <a href=\"#parameter\">parameter</a> that is bound by its position"
   },
   {
      "title":"postfix",
      "description":"An operator that is placed after its single operand"
   },
   {
      "title":"prefix",
      "description":"An operator that is placed in front of its single operand"
   },
   {
      "title":"predicate",
      "description":"A procedure that can fail or succeed to achieve a goal"
   },
   {
      "title":"predicate",
      "description":"A formula that may contain variables, that when evaluated should be either true or false"
   },
   {
      "title":"primitive",
      "description":"something that does not need to be defined"
   },
   {
      "title":"program",
      "description":"a list of things to do"
   },
   {
      "title":"program",
      "description":"a set of instructions that a computer is stupid enough to abey, written by a programmer, and often translated by a compiler into a code used by a machine"
   },
   {
      "title":"protocol",
      "description":"Rules for sending and receiving data and commands over the network"
   },
   {
      "title":"protocol",
      "description":"Rules for calling a subprogram"
   },
   {
      "title":"prototype",
      "description":"A piece of software that requires more work before it is finished, but is complete enough for the value of the finished product to be evaluated or the currant version improved"
   },
   {
      "title":"recurse",
      "description":"a step in the process of recursion"
   },
   {
      "title":"recursion",
      "description":"A technique of defining something in terms of a smaller or simpler object of the same type.  If you don't understand this then see recurse."
   },
   {
      "title":"relational",
      "description":"pertaining to a relation"
   },
   {
      "title":"relational_data_base",
      "description":"Blessed by Codd and/or cursed by Bachman"
   },
   {
      "title":"relational_operator",
      "description":"an infix operator that returns a Boolean value when given non-Boolean operands"
   },
   {
      "title":"relational_expression",
      "description":"an infix expression in which two non-Boolean values are compared and a Boolean value returned"
   },
   {
      "title":"scope",
      "description":"the parts of a program where a particular identifier has a particular meaning (set of <a href=\"#bindings\">bindings</a>)"
   },
   {
      "title":"scoped",
      "description":"pertains to languages with particular <a href=\"#scoping\">scoping</a> rules"
   },
   {
      "title":"scoping",
      "description":"the rules used to determine an identifier's <a href=\"#scope\">scope</a> in a language"
   },
   {
      "title":"selection",
      "description":"a statement that chooses between several possible executions paths in a program"
   },
   {
      "title":"semantics",
      "description":"A description of how the meaning of a valid statement or sentence can be worked out from its parsed form"
   },
   {
      "title":"set",
      "description":"a collection of objects, usually of the same type, described either by enumarating the elements or by stating a common property, or by describing rules for constructing items in the set"
   },
   {
      "title":"stack",
      "description":"A collection of data items where new items are added and old items retrieved at the same place, so that the last item added is always the first item retrieved,and so on.  An important part of compilers, interpreters, processors and programs"
   },
   {
      "title":"static",
      "description":"a keyword with too many different meanings pertaining to the life history and scope of varaibles"
   },
   {
      "title":"structure",
      "description":"A finite collection of named items of data of different types"
   },
   {
      "title":"side_effect",
      "description":"A function or expression has a side_effect if executing it changes the values of global variables or its arguments"
   },
   {
      "title":"subprogram",
      "description":"A piece of code that has been named and can be referred to by that name (called) as many times as is needed.  Either a procedure or a function"
   },
   {
      "title":"subprogram_header",
      "description":"The part of a subprogram definition that describes how the subprogram can be called without defining how it works"
   },
   {
      "title":"subtype",
      "description":"A type S is a subtype of type T if every valid operation on an object of type T is also a a valid operation of type S"
   },
   {
      "title":"syntax",
      "description":"A description of the rules that determine the validity and parsing of sentences or statements in a language"
   },
   {
      "title":"ternary",
      "description":"pertaining to 3. Ternary operators have two operands. Ternary numbers have base 3 and use 3 symbols"
   },
   {
      "title":"token",
      "description":"a particular representation of a lexemes"
   },
   {
      "title":"tree",
      "description":"A collection of connected objects called nodes with all nodes connected indirectly by precisely one path"
   },
   {
      "title":"type",
      "description":"a collection of similar objects"
   },
   {
      "title":"unary",
      "description":"pertaining to one. unary operators have one operand, unary numbers use base 1 and one symbol"
   },
   {
      "title":"virtual",
      "description":"magic"
   },
   {
      "title":"visual",
      "description":"any product that is more expensive than the previous version"
   },
   {
      "title":"void_function",
      "description":"a procedure"
   },
   {
      "title":"void_pointer",
      "description":"A pointer to an object of unknown type and size"
   },
   {
      "title":"void",
      "description":"An Abortion"
   },
   {
      "title":"widening",
      "description":"a conversion that places an object in a type that includes all the possible values of the type, and then some"
   },
   {
      "title":"accessor",
      "description":"query"
   },
   {
      "title":"Algorithm",
      "description":"A precise description of a series of steps to attain a goal"
   },
   {
      "title":"Data_Structure",
      "description":"A small data base"
   },
   {
      "title":"Function",
      "description":"A selfcontained and named piece of program that knows how to do something"
   },
   {
      "title":"objects",
      "description":"plural of <a href=\"#object\">object</a>"
   },
   {
      "title":"Semantics",
      "description":"Rules determining the meaning of correct statements in a language"
   },
   {
      "title":"Syntax",
      "description":"The rules determining the correctness and structure of statements in a language"
   }
];
