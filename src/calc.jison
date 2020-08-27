/* Calculator demo -
 * Parses and executes mathematical expressions.
 * Written by Zach Carter. Annotated by Nolan Lawson.
 */

/* lexical grammar */
%lex
%s                comment



EscapeSequence                  ('\\' [btnfr"'\\])
StringCharacter                 [^"\\^'\\] | {EscapeSequence}
StringCharacters                {StringCharacter}+

JavaStringLiteral               ('"' {StringCharacters}? '"') | ('\'' {StringCharacters}? '\'')



%%
"/*"                  {

                        this.begin('no joda man xD');
                        }
<comment>"*/"         {

                        this.popState();
                        }
<comment>.            /* skip comment content*/

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
{JavaStringLiteral}   return 'STRING';
"null"                return 'NULL';
"undefined"           return 'UNDEFINED';
"false"               return 'FALSE';
"true"                return 'TRUE';

'number'              return 'NUMBER_TYPE';
'string'              return 'STRING_TYPE';
'boolean'             return 'BOOLEAN_TYPE';
'any'                 return 'ANY_TYPE';

"const"               return 'CONST';
"let"                 return 'LET'

"console.log"         return 'console.log';

[a-zA-Z_][a-zA-Z0-9_]*    return 'IDENTIFIER';

"*"                   return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"^"                   return '^'
"("                   return '('
")"                   return ')'
";"                   return ';'
','                   return ','
':'                   return ':'
'='                   return '='
// EOF means "end of file"
<<EOF>>               return 'EOF'
// any other characters will throw an error
.                     return 'INVALID'

/lex

// Operator associations and precedence.
//
// This is the part that defines rules like
// e.g. multiplication/division apply before
// subtraction/addition, etc. Of course you can
// also be explicit by adding parentheses, as
// we all learned in elementary school.
//
// Notice that there's this weird UMINUS thing.
// This is a special Bison/Jison trick for preferring
// the unary interpretation of the minus sign, e.g.
// -2^2 should be interpreted as (-2)^2 and not -(2^2).
//
// Details here:
// http://web.mit.edu/gnu/doc/html/bison_8.html#SEC76

%left '+' '-'
%left '*' '/'
%left '^'
%left UMINUS

%start expressions

%% /* language grammar */

// At the top level, you explicitly return
// the result. $1 refers to the first child node,
// i.e. the "e"

expressions
    : sentences EOF
        {return $1;}
    ;

// For everything below the top level, $$ refers to
// the thing that should be returned. yytext refers
// to the text of that node.
//
// This {$$ = ...} format is actually no
// longer necessary, because Jison 0.3
// introduced a -> shorthand. You can see the
// shorthand illustrated in the other sample
// grammars.

sentences
    : sentences sentence { $1.push($2); $$ = $1; }
    | sentences sentence ';' { $1.push($2); $$ = $1; }
    | sentence { $$ = [$1];}
    | sentence ';' { $$ = [$1];}
    ;

sentence
    : consoleLog {$$ = $1;}
    | letDeclarations { $$ = $1; }
    | asigna { $$ = $1; }
    ;

varType
    : NUMBER_TYPE { $$ = $1; }
    | STRING_TYPE { $$ = $1; }
    | BOOLEAN_TYPE { $$ = $1; }
    | ANY_TYPE { $$ = $1; }
    | IDENTIFIER { $$ = $1; }
    ;

letDeclarations
    : LET idList ':' varType '=' e {$$ = new ast.DeclareVarListNode($4, $2, $6); }
    | LET idList ':' varType { $$ = new ast.DeclareVarListNode($4, $2);  }
    | LET idList '=' e { $$ = new ast.DeclareVarListNode("", $2, $4); }
    | LET idList {$$ = new ast.DeclareVarListNode("", $2); }
    | CONST IDENTIFIER ':' varType '=' e {$$ = new ast.DeclareVarListNode($4, [new ast.DeclareVarNode($2)], $6, true); }
    | CONST IDENTIFIER '=' e { $$ = new ast.DeclareVarListNode("", [new ast.DeclareVarNode($2)], $4, true); }
    ;

idList
    : idList ',' IDENTIFIER { $1.push(new ast.DeclareVarNode($3)); $$ = $1; }
    | IDENTIFIER { $$ = [new ast.DeclareVarNode($1)] }
    ;

asigna
    : e '=' e { $$ = new ast.AsignNode($1, $3); }
    ;

consoleLog
    : 'console.log' '(' e ')' { $$ = new ast.ConsoleLogNode($3); }
    ;

e
    : e '+' e
        {$$ = new ast.SumNode($1,$3);}
    | e '-' e
        {$$ = new ast.SubNode($1, $3);}
    | e '*' e
        {$$ = new ast.MulNode($1,$3);}
    | e '/' e
        {$$ = new ast.DivNode($1,$3);}
    | e '^' e
        {$$ = Math.pow($1, $3);}
    | '-' e %prec UMINUS
        {$$ = -$2;}
    | '(' e ')'
        {$$ = $2;}
    | NUMBER
        {$$ = new ast.NumberNode(Number(yytext));}
    | STRING
        {$$ = new ast.StringNode(yytext); }
    | NULL
        { $$ = new ast.NullNode(); }
    | UNDEFINED
        { $$ = new ast.UndefinedNode(); }
    | FALSE
        {$$ = new ast.BooleanNode(false);}
    | TRUE
        {$$ = new ast.BooleanNode(true);}
    | IDENTIFIER
        { $$ = new ast.CreateIdVarNode($1); }
    ;
