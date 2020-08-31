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

"null"                return 'NULL';
"undefined"           return 'UNDEFINED';
"false"               return 'FALSE';
"true"                return 'TRUE';

'number'              return 'NUMBER_TYPE';
'string'              return 'STRING_TYPE';
'boolean'             return 'BOOLEAN_TYPE';
'any'                 return 'ANY_TYPE';
'array'               return 'ARRAY_TYPE';

"const"               return 'CONST';
"let"                 return 'LET'

"console.log"         return 'console.log';

\s+                   /* skip whitespace */

[0-9]+("."[0-9]+)?\b  return 'NUMBER'
{JavaStringLiteral}   return 'STRING';

"+="                  return '+='
"-="                  return '-='
"*="                  return '*='
"/="                  return '/='
"%="                  return '%='
"++"                  return '++'
"--"                  return '--'
"*"                   return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"^"                   return '^'
"%"                   return '%'
"("                   return '('
")"                   return ')'
";"                   return ';'
","                   return ','
":"                   return ':'
"=="                  return '=='
"!="                  return '!='
"="                   return '='
">="                  return '>='
"<="                  return '<='
">"                   return '>'
"<"                   return '<'
"||"                  return '||'
"&&"                  return '&&'
"!"                   return '!'
"?"                   return '?'
"."                   return '.'
"["                   return '['
"]"                   return ']'
"<"                   return '<'
">"                   return '>'

[a-zA-Z_][a-zA-Z0-9_]*    return 'IDENTIFIER';

<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

%right '?'
%left '||'
%left '&&'
%left '^'
%left '==' '!='
%left '<' '>' '<=' '>='
%left '+' '-'
%left '*' '/' '%'
%right UMINUS
%left '+=' '-='
%left '*=' '/=' '%='
%right '--' '++' '!'
%left '.' '['

%start expressions

%% /* language grammar */

expressions
    : sentences EOF
        {return $1;}
    ;

sentences
    : sentences sentence ';' { $1.push($2); $$ = $1; }
    | sentence ';' { $$ = [$1];}
    ;

sentence
    : consoleLog {$$ = $1;}
    | letDeclarations { $$ = $1; }
    | asigna { $$ = $1; }
    | increment ';' { $$ = $1; }
    ;

increment
    : e '+=' e { $$ = new ast.ReAsignAddNode($1, $3); }
    | e '-=' e { $$ = new ast.ReAsignSubNode($1, $3); }
    | e '*=' e { $$ = new ast.ReAsignMulNode($1, $3); }
    | e '/=' e { $$ = new ast.ReAsignDivNode($1, $3); }
    | e '%=' e { $$ = new ast.ReAsignModNode($1, $3); }
    | e '++' { $$ = new ast.ReAddNode($1); }
    | e '--' { $$ = new ast.ReSubNode($1); }
    ;


varType
    : NUMBER_TYPE { $$ = $1; }
    | STRING_TYPE { $$ = $1; }
    | BOOLEAN_TYPE { $$ = $1; }
    | ANY_TYPE { $$ = $1; }
    | IDENTIFIER { $$ = $1; }
    | ARRAY_TYPE '<' varType '>' { $$ = $1; }
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
    | e '%' e
        {$$ = new ast.ModNode($1,$3);}
    | e '^' e
        {$$ = new ast.ExpNode($1, $3);}
    | e '==' e
        {$$ = new ast.EqNode($1, $3);}
    | e '!=' e
        {$$ = new ast.DifNode($1, $3);}
    | e '>' e
        {$$ = new ast.HigherNode($1, $3);}
    | e '>=' e
        {$$ = new ast.HigherEqNode($1, $3);}
    | e '<=' e
        {$$ = new ast.MinorEqNode($1, $3);}
    | e '<' e
        {$$ = new ast.MinorNode($1, $3);}
    | e '||' e
        {$$ = new ast.OrNode($1, $3);}
    | e '&&' e
        {$$ = new ast.AndNode($1, $3);}
    | '!' e
        {$$ = new ast.NotNode($2);}
    | '(' e ')'
        {$$ = $2;}
    | '[' ']'
        { $$ = new ast.CreateArrayNode(new Array<Op>()); }
    | '[' eList ']'
        { $$ = new ast.CreateArrayNode($2); }
    | '-' e %prec UMINUS
        {$$ = new ast.MulNode($2, new ast.NumberNode(-1));}
    | increment
        { $$ = $1 }
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

eList
    : eList ',' e
        {$1.push($3); $$ = $1; }
    | e
        {$$ = [$1]}
    ;
